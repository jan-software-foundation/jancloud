import express from 'express';

/**
 * Handle errors caused by a request. Logs the error and responds with 500 Internal server error
 * @param req 
 * @param res 
 * @param error 
 */
export function serverError(req: express.Request, res: express.Response, error: any) {
    console.log(`Error on request: ${req.url}`);
    console.error(error);
    console.log('\n');
    /* Write error to disk or smth */
    
    if (req.accepts("html")) {
        res.status(500).render('../src/views/error.ejs', { statusCode: 500, statusText: "Internal server error" });
    } else {
        res.status(500).send({
            "error": true,
            "status": 500,
            "description": "Internal server error"
        });
    }
}

/**
 * Renders an error page with the provided status code and status text
 * @param req The Express Request Object
 * @param res The Express Response Object
 * @param statusCode The HTTP status code
 * @param statusText The error description
 */
export function renderError(req: express.Request, res: express.Response, statusCode: number, statusText: String) {
    if (req.accepts("html")) {
        res.status(statusCode).render('../src/views/error.ejs', { statusCode, statusText });
    } else {
        res.status(statusCode).send({
            "error": true,
            "status": statusCode,
            "description": statusText
        });
    }
}
