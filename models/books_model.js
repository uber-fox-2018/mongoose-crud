const mongoose = require('mongoose')
const Schema = mongoose.Schema

const booksSchema = new Schema({
    isbn: { type: String },
    title: { type: String },
    author: { type: String },
    category: { type: String },
    stock: { type: Number },
    CustomerId: [{type: Schema.Types.ObjectId, ref: 'Customer'}]
}, {
    timestamps: true
})

const Book = mongoose.model('Book', booksSchema)

module.exports = Book