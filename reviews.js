var mongoose = require('mongoose');  
var reviewSchema = new mongoose.Schema({  
  asin: String,
  review_count: String,
  review_count2: String,
  review_count3: String,
  name: String,
  ratings: Object,
  url: String,
  price: String,
  ts: Date,
  overall_rating: String,
  overall_rating2: String,
  overall_rating3: String
});
mongoose.model('Review', reviewSchema);
module.exports = mongoose.model('Review');