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
            count++;
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

    countNodesWithTwoChildren(root = this.root) {
        if (!root) {
            return 0
        }
        let count = 0;

        if (root.left && root.right) {
            count++
        }

        count += this.countNodesWithTwoChildren(root.left);
        count += this.countNodesWithTwoChildren(root.right)

        return count
    }

    sumOfAllNodes(root = this.root) {
        if (!root) {
            return 0
        }

        let sum = 0;

        if (root) {
            sum += root.value
        }
        sum += this.sumOfAllNodes(root.left);
        sum += this.sumOfAllNodes(root.right)

        return sum
    }

    sumOfLeafNodes(root = this.root) {
        if (!root) {
            return 0
        }

        let sum = 0;

        if (!root.left && !root.right) {
            sum += root.value
        }

        sum += this.sumOfLeafNodes(root.left);
        sum += this.sumOfAllNodes(root.right)
    }

    countOfNodeWithOnlyRightChild(root = this.root) {
        if (!root) {
            return 0
        }

        let count = 0;
        if ((!root.left && root.right)) {
            count++
        }

        count += this.countOfNodeWithOnlyRightChild(root.left)
        count += this.countOfNodeWithOnlyRightChild(root.right)

        return count
    }

    kthLargest(k) {
        const result = this.findKthLargest();
        return result[k - 1]
    }

    findKthLargest(root = this.root, result = []) {
        if (root) {
            this.findKthLargest(root.right, result)
            result.push(root.value)
            this.findKthLargest(root.left, result);
        }
        return result
    }

    heightOfTree(root = this.root) {
        if(!root) {
            return -1
        }

        return Math.max(this.heightOfTree(root.left), this.heightOfTree(root.right)) + 1;
    }

    isBalanced(root = this.root){
        if(!root) {
            return true;
        }

        if(Math.abs(this.heightOfTree(root.left) - this.heightOfTree(root.right)) > 1){
            return false
        } 

        return this.isBalanced(root.left) && this.isBalanced(root.right)
    }

}

const tree = new Tree()

tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(7)


//tree.preOrder()

//console.log(tree)

//console.log(tree.inOrder())


console.log('3rd largest ')
console.log(tree.kthLargest(3))
console.log('heightOfTree ')
console.log(tree.heightOfTree())
//console.log(tree.countLeafNodes())