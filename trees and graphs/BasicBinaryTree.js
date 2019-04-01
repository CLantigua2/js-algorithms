// this tree can only represent a left and a right
class BinaryTree {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }

    insertLeft(value) {
        this.left = new BinaryTree(value)
        return this.left

    }

    insertRight(value) {
        this.right = new BinaryTree(value)
        return this.right

    }

}

const print = (x) => console.log(x)

recursivePrint = (node, cb) => {
    cb(node.value)
    if (node.value === undefined) return
    if (node.left) recursivePrint(node.left, cb)
    if (node.right) recursivePrint(node.right, cb)
}
console.time('timer')
const root = new BinaryTree(1)

root.insertLeft(4)
root.left.insertLeft(2)
root.left.insertRight(6)
root.insertRight(4)
root.right.insertLeft(5)
root.right.insertRight(6)
root.left.left.insertLeft(3)

console.log(recursivePrint(root, print))
console.timeEnd('timer')