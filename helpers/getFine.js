function getFine(dueDate, inDate){
    let timeDiff = Math.abs(inDate.getTime() - dueDate.getTime());
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return (inDate <= dueDate? 0 : diffDays * 1000);
}

module.exports = getFine;