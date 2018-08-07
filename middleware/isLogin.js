module.exports = (req, res, next) => {

    if(req.get('token')) {
        next()
    } else {
        res.status(401).json({
            "msg": "No Authorize"
        })
    }
}