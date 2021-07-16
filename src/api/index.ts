import express from 'express';
import mongodb from 'mongodb';

export async function init(app: express.Application) {
    const db: mongodb.Db = await require('./db').db();
    
    let promises = [
        import('./routes/root'),
        import('./routes/auth/register'),
    ];
    
    const resolved = await Promise.all(promises);
    resolved.forEach(p => p.register(app, db));
}
