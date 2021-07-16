import express from 'express';
import mongodb from 'mongodb';
import argon2 from 'argon2';
import { ulid } from 'ulid';
import { renderError, serverError } from '../../misc/errors';

const validation_regexes = {
    USERNAME: /[A-z0-9_-]{2,32}/, /* Letters, numbers, underscores and hyphens, between 2 and 32 symbols long */
    PASSWORD: /(.){8,128}/        /* All symbols, between 8 and 128 symbols long */
};

export async function register(app: express.Application, db: mongodb.Db) {
    app.get('/api/auth/register', async (req: express.Request, res: express.Response) => {
        try {
            let body = req.body;
            
            // Check if correct request arguments are provided
            if (!body || typeof body.username != "string" || typeof body.password != "string") {
                return renderError(req, res, 400, "One of `username` or `password` is missing in request body");
            }
            
            // Validate username and password
            if (!(validation_regexes.USERNAME.test(body.username) && body.username.match(validation_regexes.USERNAME)[0].length == body.username.length)) { //i showed this to other dev and he didnt aaaaa therefore this is approved
                return renderError(req, res, 400, `Username does not match requirements: ${validation_regexes.USERNAME}`);
            }
            if (!(validation_regexes.PASSWORD.test(body.password) && body.password.match(validation_regexes.USERNAME)[0].length == body.username.length)) {
                return renderError(req, res, 400, `Password does not match requirements: ${validation_regexes.PASSWORD}`);
            }
            
            // Check if user with the same username already exists
            if (await db.collection("users").findOne({ username: body.username })) {
                return renderError(req, res, 400, "An user with this username already exists");
            };
            
            let passwordHash = await argon2.hash(body.password);
            console.log(passwordHash);
            
            let userID = ulid();
            
            await db.collection("users").insertOne({
                _id: userID,
                username: body.username,
                passwordHash: passwordHash
            });
            
            res.status(200).send({
                "success": true,
                "userID": userID
            });
        } catch(e) {
            serverError(req, res, e);
        }
    });
}
