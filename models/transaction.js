const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let TransactionSchema = new Schema({
	member: { type: Schema.Types.ObjectId, required: true, ref: "Customer" },
	days: { type: Number, required: true },
	out_date: { type: Date, required: true },
	in_date: { type: Date, required: true },
	due_date: { type: Date, required: true },
	fine: {
		type: Number,
		required: true,
		validate: {
			validator: function(fine) {
				return fine >= 0;
			},
			message: "Denda tidak bisa kurang dari 0"
		}
	},
	booklist: [{ type: Schema.Types.ObjectId, ref: "Book" }]
});

module.exports = mongoose.model("Transaction", TransactionSchema);
