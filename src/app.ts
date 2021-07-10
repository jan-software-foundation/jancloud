require('dotenv').config();

import express from 'express';
import path from 'path';
const cookieParser = require('cookie-parser')
const logger = require('morgan')
import history from 'connect-history-api-fallback';

const app = express();

(async () => {
    await require('./api/index').init(app);
    
    app.get('/', (req, res) => res.sendFile('/vue-dist/index.html', {root: path.join(process.cwd())}))

    app.use('/', express.static('vue-dist'));
    
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(history());
    
    
    app.listen(8080, () => console.log('Listening on http://localhost:8080'));
})();

export default app;