const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var bookSchema = new Schema({
    isbn: String,
    title: {
        type: String,
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
        type: Number,
        require: true
    }
}, {
        timestamps: true
});

var Book = mongoose.model('Book', bookSchema);

module.exports = Book;