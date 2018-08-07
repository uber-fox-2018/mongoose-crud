var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mongoose_CRUD");
const express = require("express");
const app = express();
const book = require("./routes/book");
const customer = require("./routes/customer");
const transaction = require("./routes/transaction");


app.use(express.urlencoded({ extended: false }));

var db = mongoose.connection;
app.use('/books', book)
app.use('/customer', customer)
app.use('/transaction',transaction)


db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("mongoose: connected to localhost 3000");
});



app.listen(3000, () => console.log("Example app listening on port 3000!"));
