class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    insert(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.root = node
        } else {
            this.insertNode(this.root, node)
        }
    }

    insertNode(root, node) {
        if (node.value < root.value) {
            if (root.left == null) {
                root.left = node
            } else {
                this.insertNode(root.left, node)
            }
        } else {
            if (root.right == null) {
                root.right = node
            } else {
                this.insertNode(root.right, node)
            }
        }
    }

    preOrder(root = this.root) {
        if (root) {
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    countSingleNode(root = this.root) {
        if (!root) {
            return 0
        }
        let count = 0;

        if ((!root.left && root.right) || (root.left && !root.right)) {
            count = 1;
        }


        count += this.countSingleNode(root.left)
        count += this.countSingleNode(root.right)
        return count
    }

    countLeafNodes(root = this.root) {
        if (!root) {
            return 0
        }

        let count = 0;

        if ((!root.left && !root.right)) {
            count++
        }

        count += this.countLeafNodes(root.left)
        count += this.countLeafNodes(root.right)
        return count
    }

    countNodesTwoChildren(root = this.root){
        if(!root){
            return 0
        }
        let count = 0;

        if(!root.left && !root.right) {
            
        }
    }
}

const tree = new Tree()

tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(7)


//tree.preOrder()

console.log(tree)

console.log(tree.countLeafNodes())