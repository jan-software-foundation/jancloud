import express from 'express';
import mongodb from 'mongodb';

export async function register(app: express.Application, db: mongodb.Db) {
    app.get('/api/signin/register', (req: express.Request, res: express.Response) => {
        let body = req.body;
        if (!body || !(body.username instanceof String && (body.password instanceof String || body.passwordHash instanceof String))) {
            // TODO respond with json if accept header says so
            return res.status(400).render('../src/views/error.ejs', {
                statusCode: 400,
                statusText: "One of `username`, `password` or `passwordHash` is missing in request body"
            });
        }
    });
}
