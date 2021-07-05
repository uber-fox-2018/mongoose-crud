var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const Customer = require("../models/customer");
const Book = require("../models/books");

var transactionSchema = new Schema({
  member: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
  days: Number,
  out_date:Date,
  // out_date: { type: Date, default: Date.now },
  //plus 7 days
  due_date: Date,
  in_date:Date,
  // due_date: new Date(),
  // in_date: { type: Date, default: Date.now + 9 * 24 * 60 * 60 * 1000 },
  fine: Number,
  booklist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }]
});




var Transaction = mongoose.model("Transaction", transactionSchema);
module.exports = Transaction;
