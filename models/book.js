const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let BookSchema = new Schema({
	title: { type: String, required: true },
	isbn: { type: String, required: true },
	author: { type: String, required: true },
	category: { type: String, required: true },
	stock: { type: Number, required: true }
},{
	timestamps:true
});

module.exports = mongoose.model("Book", BookSchema);
