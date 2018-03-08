var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Reviews = require('./reviews');

// router.get('/', function (req, res) {
//   Reviews.find({}, function (err, reviews) {
//       if (err) return res.status(500).send("There was a problem finding the users.");
//       res.status(200).send(reviews);
//   });
// });

router.get('/asin/:asin', function (req, res) {
  var query = Reviews.find({'asin':req.params.asin}).sort('-ts').limit(5);
  query.exec(function (err, reviews) {
    if (err) return res.status(500).send("There was a problem finding the asin.");
    res.status(200).send(reviews);
  });
});

router.get('/all', function (req, res) {
  const allAsins = [
    "B073C4H9RT",
    "B07373WJ5T",

    // "B072JBC1GM",
    // "B07144XG5Q",
    // "B072HMPPH2",
    // "B01FRGGNCU",
    // "B01NBRB8B6",
    // "B01N1416SN",

    // "B074V4CJJK",
    // "B073NN58DQ",
    // "B073KLVNVX",
    // "B073DCW3WR",
    // "B077J56SB7",
    // "B077J5X5NZ",

    // "B010PB26Z0",
    // "B01LVZC319",
    // "B01LW9L9YR",
    // "B01GIV6E4A",
    // "B01GJ1NEGK",
    // "B01GJ1NFSW",
    // "B01GJ1N9V0",
    // "B01GJ1NEEM",
    // "B01GJ1ND5C",
    // "B01F7RKTII",
    // "B00ZQDJTOE",

    // "B0761PRC72",
    // "B075SWX5W8",
    // "B075SS5H1C",
    // "B075SZJD5Y",
  ]

  // for (var asin of allAsins) {
  //   console.log(asin);
  //   var query = Reviews.find({'asin':asin}).sort('-ts').limit(5);
  //   query.exec(function (err, reviews) {
  //     if (err) return console.log("There was a problem finding the asin.");
      
  //     // res.status(200).send(reviews);
  //   });
  // }
  // Reviews.find({'asin':req.params.asin}, function (err, reviews) {
  //     if (err) return res.status(500).send("There was a problem finding the users.");
  //     res.status(200).send(reviews);
  // });

  var query = Reviews.find({}).sort('-ts').limit(100);
  query.exec(function (err, reviews) {
    if (err) return res.status(500).send("There was a problem finding the asin.");
    
    let tmpReviewObj = {}
    reviews.forEach(rev => {
      if(tmpReviewObj[rev.asin]){
        if(tmpReviewObj[rev.asin].overall_rating2 && tmpReviewObj[rev.asin].review_count2){
          if(tmpReviewObj[rev.asin].overall_rating3 && tmpReviewObj[rev.asin].review_count3){
            return;
          }
          tmpReviewObj[rev.asin].overall_rating3 = rev.overall_rating;
          tmpReviewObj[rev.asin].review_count3 = rev.review_count;
          return;
        }
        tmpReviewObj[rev.asin].overall_rating2 = rev.overall_rating;
        tmpReviewObj[rev.asin].review_count2 = rev.review_count;
        return;
      }
      tmpReviewObj[rev.asin] = rev
    })
    console.log(tmpReviewObj);
    var newReviewsArr = Object.values(tmpReviewObj);
    res.status(200).send(newReviewsArr);
  });
});

module.exports = router;