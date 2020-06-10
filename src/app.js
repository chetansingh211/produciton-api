'use strict'
const serverless = require('serverless-http');
const express = require('express');
var fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const jwt = require('./utils/jwt');
const errorHandler = require('./utils/error-handler');
const expressValidator = require('express-validator')

//Instantiate Express
const app = express();
app.use(bodyParser.json());
app.use(expressValidator())
app.use(helmet()); // enhance app security with Helmet
app.use(cors()); // enable all CORS requests
app.use(morgan('combined')); // log HTTP requests
//app.use(jwt()); // use JWT auth to secure the api

//===========================================
// Route Handlers
//===========================================
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', function(req, res, next){
	res.send('Production API - Server');
});

// global error handler
app.use(errorHandler);

//  Connect application routes
app.use('/buyers', require('./routes/buyerRoute'));
app.use('/buyerorders', require('./routes/buyerOrderRoute'));
app.use('/items', require('./routes/itemRoute'));
app.use('/vendors', require('./routes/vendorRoute'));

// Error handling
app.use((req, res, next) => {
    const error = new Error('Invalid request!');
    error.status = 404;
    next(error);  
})

// Error handling
app.use((error, req, res, next)=> {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports.handler = serverless(app);