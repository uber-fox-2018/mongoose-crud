var mongoose = require('mongoose')

var Schema = mongoose.Schema
var blogTrasanction = new Schema({
    member : {type :Schema.Types.ObjectId,ref :'customer'},
    days : Number,
    booklist : [{type :Schema.Types.ObjectId,ref :'Books'}],
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
      votes: Number,
      favs:  Number
    }
})

var transaction = mongoose.model('transaction',blogTrasanction)

module.exports = transaction