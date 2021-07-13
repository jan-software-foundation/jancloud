require('dotenv').config();

import express from 'express';
import path from 'path';
const cookieParser = require('cookie-parser');
const logger = require('morgan');
import history from 'connect-history-api-fallback';

const app = express();

(async () => {
    app.set('view engine', 'ejs');
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    
    await require('./api/index').init(app);
    
    app.use(history());
    app.use('/', express.static('vue-dist'));
    app.get('*', (req, res) => res.sendFile('/vue-dist/index.html', {
        root: path.join(process.cwd())
    }));
    
    app.listen(8080, () => console.log('Listening on http://localhost:8080'));
})();

export default app;