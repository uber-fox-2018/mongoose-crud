const express = require("express");
const path = require("path");
const favicon = require("static-favicon");
const logger = require("morgan");
const routes = require("./routes/index");
const app = express();

const mongoose = require("mongoose");
//Set db disini
let mongoDB = "mongodb://127.0.0.1:27017/library";
mongoose.connect(mongoDB);
let db = mongoose.connection;

//Setting up mongoose using promises
//mongoose.Promise = Promise;  

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(favicon());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({useNewUrlParser:true}));

app.use("/", routes);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
	var err = new Error("Not Found");
	err.status = 404;
	next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get("env") === "development") {
	app.use(function(err, req, res, next) {
		res.status(err.status).json({
			message: err.message,
			error: err
		});
	});
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
	res.status(err.status || 500).json({
		message: err.message,
		error: {}
	});
});

module.exports = app;
