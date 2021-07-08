import express from 'express';

export async function register(app: express.Application) {
    app.get('/api/example/test', (req: express.Request, res: express.Response) => {
        res.send("gaming");
    });
}
