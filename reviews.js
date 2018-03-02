var mongoose = require('mongoose');  
var reviewSchema = new mongoose.Schema({  
  asin: String,
  review_count: String,
  name: String,
  ratings: Object,
  url: String,
  price: String,
  ts: Date,
  overall_rating: String
});
mongoose.model('Review', reviewSchema);
module.exports = mongoose.model('Review');