function filterBody (body, allowedData) {
    return Object.entries(body).filter(body => {
        const key = body[0]
        const value = body[1]

        if (allowedData.includes(key)) return true
        return false
    }).reduce((carry, body) => {
        const key = body[0]
        const value = body[1]

        carry[key] = value
        return carry
    }, {})
}

module.exports = filterBody;