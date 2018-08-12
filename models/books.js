const mongoose = require('mongoose')
const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const BookSchema = new Schema({
    isbn: String,
    title: String,
    author: String,
    category: String,
    stock: Number
})
const book = mongoose.model('Books', BookSchema); 


module.exports= book