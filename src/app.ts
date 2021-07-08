import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const history = require('connect-history-api-fallback');
app.use(express.static(path.join(__dirname, 'dist')));
app.use(history());

app.use(function(req, res, next) {
    next(createError(404));
});

app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;