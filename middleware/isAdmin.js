const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {

    if(req.get('token')) {
        let decode = jwt.verify(req.get('token'), process.env.SECREET || 'asrul-harahap')
        if(decode.role === 'admin') {
            next()
        } else {
            res.status(401).json({
                "msg": "No Authorize"
            })
        }
    } else {
        res.status(403).json({
            "msg": "Forbidden access"
        })
    }

}