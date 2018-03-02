var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Reviews = require('./reviews');

router.get('/', function (req, res) {
  Reviews.find({}, function (err, reviews) {
      if (err) return res.status(500).send("There was a problem finding the users.");
      res.status(200).send(reviews);
  });
});

router.get('/asin/:asin', function (req, res) {
  // Reviews.find({'asin':req.params.asin}, function (err, reviews) {
  //     if (err) return res.status(500).send("There was a problem finding the users.");
  //     res.status(200).send(reviews);
  // });

  var query = Reviews.find({'asin':req.params.asin}).sort('-ts');
  query.exec(function (err, reviews) {
    if (err) return res.status(500).send("There was a problem finding the users.");
      res.status(200).send(reviews);
  });
});

module.exports = router;