const swap = (num, i, j) => {
    let temp = num[i]
    num[i] = num[j]
    num[j] = temp
}

module.exports = swap