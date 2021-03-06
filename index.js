'use strict';

var compression = require('compression');
var express = require('express');
var kraken = require('kraken-js');
var helmet = require('helmet');
var flash = require('connect-flash');
var db = require('./lib/db');


var options, app;

/*
 * Create and configure application. Also exports application instance for use by tests.
 * See https://github.com/krakenjs/kraken-js#options for additional configuration options.
 */
options = {
    onconfig: function (config, next) {
        /*
         * Add any additional config setup or overrides here. `config` is an initialized
         * `confit` (https://github.com/krakenjs/confit/) configuration object.
         */
        db.config(config.get('databaseConfig'));
        next(null, config);
    }
};

app = module.exports = express();
app.use(compression())
app.use(kraken(options));

app.use(helmet());
app.use(flash());
app.use(function (req, res, next) {
    var messages = require('express-messages')(req, res);
    //helper function that dust requires to render express message properly
    res.locals.messages = function (chunk, context, bodies, params) {
        return chunk.write(messages());
    };
    next();
});

app.on('start', function () {
    console.log('Application ready to serve requests.');
    console.log('Environment: %s', app.kraken.get('env:env'));
});
