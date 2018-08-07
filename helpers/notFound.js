module.exports =
function notFound (err) {
  res.status(404).json({msg: 'book not found', err:err.message});
}