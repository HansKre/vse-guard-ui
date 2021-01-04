'use strict';
const bodyParser = require('body-parser');

const logEverything = function (app) {
    console.log('Logging everything to console...');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(function (req, res, next) {
        if (
            req.method === 'POST' ||
            req.method === 'PUT' ||
            req.method === 'DELETE'
        ) {
            console.log(req.method, req.path, 'BODY:', req.body);
        } else {
            console.log(req.method, req.path, 'QUERY:', req.query);
        }
        next();
    });
}

module.exports = logEverything;