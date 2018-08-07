module.exports =
function errorHandler (err) {
  res.status(500).json({
    err: err.message
  })
}

