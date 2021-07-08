import mongodb from 'mongodb';

export async function db(): Promise<mongodb.Db> {
    // Lord forgive me, for I have sinned
    const connection_string = `mongodb://${process.env.DB_USERNAME ?? ''}` +
        `${process.env.DB_USERNAME && process.env.DB_PASSWORD ? ':' : ''}` +
        `${process.env.DB_PASSWORD ?? ''}` +
        `${process.env.DB_USERNAME || process.env.DB_PASSWORD ? '@' : ''}` +
        `${process.env.DB_HOST ?? '127.0.0.1:27017'}`;
    
    const client = new mongodb.MongoClient(connection_string, { useUnifiedTopology: true });
    
    await new Promise<void>((res, rej) => {
        client.connect((err) => {
            if (err) throw err;
            console.log('Connected to mongo!');
            res();
        });
    });
    
    let db = client.db(process.env.DB_NAME ?? 'jancloud');
    
    // Initalize the database, if not already done
    db.collection('users').insertOne({ name: 'amogus' });
    
    return db;
}
