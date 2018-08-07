const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let CustomerSchema = new Schema({
	name: { type: String, required: true },
	memberid: { type: String, required: true },
	address: { type: String, required: true },
	zipcode: { type: String, required: true },
	phone: {type: String, required:true}
});

module.exports = mongoose.model("Customer", CustomerSchema);
