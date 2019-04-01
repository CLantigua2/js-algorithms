class Node {
    constructor(value, left = null, right = null) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    add(value) {
        // get ref to current node
        const node = this.root;
        // if current is empty, make value the new node value
        if (node === null) {
            this.root = new Node(value);
            return this.root;
        } else {
            const searchTree = function (node) {
                if (value < node.value) {
                    if (node.left === null) {
                        node.left = new Node(value);
                        return node.left;
                    } else if (node.left !== null) {
                        return searchTree(node.left);
                    }
                } else if (value > node.value) {
                    if (node.right === null) {
                        node.right = new Node(value);
                        return node.right;
                    } else if (node.right !== null) {
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            };
            return searchTree(node);
        }
    }
}

const root = new BinarySearchTree(2)
root.add(4)
root.add(1)
root.add(2)
root.add(3)
root.add(6)
root.add(8)
root.add(12)
root.add(7)
root.add(13)
root.add(11)

console.log(root)