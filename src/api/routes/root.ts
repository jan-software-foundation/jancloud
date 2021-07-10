import express from 'express';
import mongodb from 'mongodb';

export async function register(app: express.Application, db: mongodb.Db) {
    app.get('/api', (req: express.Request, res: express.Response) => {
        let json = {
            "version": require('../../../package.json').version
        }
        res.send(json);
    });
}
