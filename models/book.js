var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var blogSchema = new Schema({
    title:  String,
    author: String,
    category: String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
      votes: Number,
      favs:  Number
    }
  });

  var book = mongoose.model('Books', blogSchema);


module.exports = book