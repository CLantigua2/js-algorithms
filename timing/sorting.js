// import the sorting algorithms
const { bubbleSort } = require('../sorts/bubbleSort.js')
// import any helpers
const randomeNumberList = require('../helpers/')


// this will test the execution time of sorting algorithms
console.time('timer')
console.log(bubbleSort(randomeNumberList))
console.timeEnd('timer')

