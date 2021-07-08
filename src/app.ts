require('dotenv').config();

import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import history from 'connect-history-api-fallback';

const app = express();

(async () => {
    await require('./api/index').init(app);
    
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(history());
    app.set('views', './views')
    app.set('view engine', 'ejs')
    
    app.get('/', (req, res, next) => {
        return res.render('index', {ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress });
    });
    
    app.use(function(req, res, next) {
        next(createError(404));
    });
    
    app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};
        
        res.status(err.status || 500);
        res.send('error');
    });
    
    
    app.listen(8080, () => console.log('Listening on http://localhost:8080'));
})();

export default app;