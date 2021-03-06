var mongoose = require('mongoose');  
var reviewSchema = new mongoose.Schema({  
  asin: String,
  review_count: String,
  review_count2: String,
  review_count3: String,
  review_count4: String,
  review_count5: String,
  name: String,
  ratings: Object,
  url: String,
  price: String,
  ts: String,
  ts2: String,
  ts3: String,
  ts4: String,
  ts5: String,
  overall_rating: String,
  overall_rating2: String,
  overall_rating3: String,
  overall_rating4: String,
  overall_rating5: String
});
mongoose.model('Review', reviewSchema);
module.exports = mongoose.model('Review');