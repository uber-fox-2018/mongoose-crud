var createError = require('http-errors');
var express = require('express');;
var logger = require('morgan');

var indexRouter = require('./routes/index');
var booksRouter = require('./routes/book');
var customersRouter = require('./routes/customer');
var transactionsRouter = require('./routes/transaction');


var app = express();

// view engine setup

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/books', booksRouter);
app.use('/customers', customersRouter);
app.use('/transactions', transactionsRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json('error');
});

module.exports = app;
