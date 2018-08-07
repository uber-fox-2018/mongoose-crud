var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
  isbn: {
    type: String,
    require: true
  },
  title: {
    type: String,
    unique: true,
    require: true
  },
  author: {
    type: String,
    require: true
  },
  category: {
    type: String,
    require: true
  },
  stock: {
    type: String,
    require: true
  },
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
});

var Book = mongoose.model('Book', bookSchema);

module.exports = Book
