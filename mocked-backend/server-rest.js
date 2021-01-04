/**
 * Serves REST only
 */
const express = require('express');
const path = require('path');
const app = express();
const port = 4000;

app.get('/test', (req, res) => {
    const testJson = [{ payload: 'Hello World!' }];
    console.log('firing');
    res.json(testJson);
})

// mounts online /static/images/cards to local /public
// https://expressjs.com/en/starter/static-files.html
app.use('/static/images/cards', express.static('public'))

const BASE_URL = '/api';
// http://localhost:8080/api/apps: show all apps -> AppView
app.route(BASE_URL + '/apps')
    .get((req, res) => {
        // res.json('AppView');
        res.sendFile(path.join(__dirname, '/data', 'sections.json'));
    })
// http://localhost:8080/api/app/vse-data-hub: show app + all environments -> ApplicationView
app.route(BASE_URL + '/app/:app')
    .get((req, res) => {
        const status = "UP";
        const dummy = {
            "status": status,
            "details": {
                "mockSpace": {
                    "status": status,
                    "details": {
                        "total": 77313585152,
                        "free": 58966511616,
                        "threshold": 10485760
                    }
                },
                "mongo": {
                    "status": "UP",
                    "details": { "version": "3.6.3" }
                },
                "db": {
                    "status": "UP",
                    "details": { "database": "H2", "hello": 1 }
                }
            }
        };
        res.json({
            name: 'ApplicationView for App: ' + req.params.app,
            payload: dummy
        });
    });
// http://localhost:8080/api/app/vse-data-hub/INT: show environment + checks -> EnvironmentView
app.route(BASE_URL + '/app/:app/:env')
    .get((req, res) => {
        res.json('EnvironmentView for App: ' + req.params.app + ' Env: ' + req.params.env);
    })
// http://localhost:8080/api/app/vse-data-hub/INT/0: show check + result -> CheckView
// TODO
// http://localhost:8080/api/app/vse-data-hub/INT/0/check: execute and show check + result -> CheckView
// TODO

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})