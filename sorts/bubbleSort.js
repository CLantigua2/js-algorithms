const { randomNumberList, swap } = require('../helpers/')

const bubbleSort = num => {
    let swapped
    do {
        swapped = false
        for (let i = 0; i < num.length; i++) {
            if (num[i] && num[i + 1] && num[i] > num[i + 1]) {
                swap(num, i, i + 1)
                swapped = true
            }
        }
    } while (swapped)
    return num
}

bubbleSort(randomNumberList)

module.exports = { bubbleSort }
