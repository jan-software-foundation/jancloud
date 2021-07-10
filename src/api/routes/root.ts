import express from 'express';

export async function register(app: express.Application) {
    app.get('/api', (req: express.Request, res: express.Response) => {
        let json = {
            "version": require('../../../package.json').version
        }
        res.send(json);
    });
}
