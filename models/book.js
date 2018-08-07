var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    isbn: String,
    title:  String,
    author: String,
    category:   String,
    stock: String
});

var Book = mongoose.model('Book', bookSchema);

module.exports = Book
