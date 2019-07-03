
// ***************************************************************************
// General
// ***************************************************************************

var conf = { 
    port: 9999,
    debug: false,
    dbPort: 6379,
    dbHost: '127.0.0.1',
    dbOptions: {},
    mainroom: 'MainRoom'
};

// External dependencies
const express = require('express');
const http = require('http');
const events = require('events');
const bodyParser = require('body-parser');

// HTTP Server configuration & launch
var app = express(),
    server = http.createServer(app);
    server.listen(conf.port);

// Express app configuration
app.use(bodyParser.json());
app.use(express.static('static'));

// Logger configuration
var logger = new events.EventEmitter();
logger.on('newEvent', function(event, data) {
    // Console log
    console.log('%s: %s', event, JSON.stringify(data));
    // Persistent log storage too?
    // TODO
});