import express from 'express';
import mongodb from 'mongodb';
import argon2 from 'argon2';
import { renderError, serverError } from '../../misc/errors';

const validation_regexes = {
    USERNAME: /[A-z0-9_-]{2,32}/g, /* Letters, numbers, underscores and hyphens, between 2 and 32 symbols long */
    PASSWORD: /(.){8,128}/g        /* All symbols, between 8 and 128 symbols long */
};

export async function register(app: express.Application, db: mongodb.Db) {
    app.get('/api/signin/register', async (req: express.Request, res: express.Response) => {
        try {
            let body = req.body;
            
            // Check if correct request arguments are provided
            if (!body || typeof body.username != "string" || typeof body.password != "string") {
                return renderError(req, res, 400, "One of `username` or `password` is missing in request body");
            }
            
            // Validate username and password
            if (!validation_regexes.USERNAME.test(body.username)) {
                return renderError(req, res, 400, `Username does not match requirements: ${validation_regexes.USERNAME}`);
            }
            if (!validation_regexes.PASSWORD.test(body.password)) {
                return renderError(req, res, 400, `Password does not match requirements: ${validation_regexes.PASSWORD}`);
            }
            
            let passwordHash = await argon2.hash(body.password);
            console.log(passwordHash);
            
            /* TODO Add user to DB */
            
            res.status(200).send({ "success": true });
        } catch(e) {
            serverError(req, res, e);
        }
    });
}
