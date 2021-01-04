/**
 * Serves REST and GQL
 */
'use strict';
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 4000;

// install logging middleware
require('./logging-middleware.js')(app);

// mounts online: /static/images/cards to local: /public
// https://expressjs.com/en/starter/static-files.html
app.use('/static/images/cards', express.static('public'))

//Routing for REST API
require('./routes/rest.js')(app);

//Routing for GraphQL API
require('./routes/gql.js')(app);

//404 Not Found Middleware, if nothing else triggered
app.use(function (req, res, next) {
    res.status(404)
        .type('text')
        .send('Not Found');
});

app.listen(port, () => {
    console.log(`Rest-API available at http://localhost:${port}/api \nGraphiql available at http://localhost:${port}/graphql`)
})