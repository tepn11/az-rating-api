var express = require('express');
var app = express();
var db = require('./db');

var ReviewsController = require('./reviewsController');
app.use('/reviews', ReviewsController);

module.exports = app;