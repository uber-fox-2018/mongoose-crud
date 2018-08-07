module.exports = (now, add) => {
    var date = new Date(now)
    var nextN = new Date(0, 0, 0, date.getMonth(), date.getDay() + add, date.getFullYear())
    return nextN
}