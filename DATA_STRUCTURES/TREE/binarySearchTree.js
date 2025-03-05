class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
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

    levelOrder(){
        let queue = []
        queue.push(this.root);
        while(queue.length){
            const curr = queue.shift()
            console.log(curr.value);
            if(curr.left) {
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
}