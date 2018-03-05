var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var db = require('./db');

var corsOptions = {
  origin: '*',
  exposedHeaders: ['Content-Range', 'X-Content-Range', 'Content-Disposition', 'Content-Error', 'X-Powered-By'],
  credentials: false
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var ReviewsController = require('./reviewsController');
app.use('/reviews', ReviewsController);

module.exports = app;