const mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost:27017/db_mangoose',{ useNewUrlParser: true});

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId;

const Book = new Schema({
    isbn: String,
    title: String,
    author: String,
    category: String,
    stock: Number
});

const BooksModel = mongoose.model('Book', Book);

module.exports = BooksModel
