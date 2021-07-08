import express from 'express';
import mongodb from 'mongodb';

export async function init(app: express.Application) {
    const dbPromise: Promise<mongodb.MongoClient> = require('./db').db();
    
    let promises = [
        require('./routes/root').register(app),
        require('./routes/example/test').register(app),
    ];
    
    const resolved = await Promise.all([dbPromise, ...promises]);
    const db: mongodb.Db = resolved[0];
}
