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
        return this.root == null
    }

    insert(value) {
        const node = new Node(value)
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

    max(root = this.root){
        if(!root.right){
            return root.value
        }else{
            this.max(root.right)
        }
    }

    min(root = this.root) {
        if(!root.left) {
            return root.value
        }else{
            return this.min(root.left)
        }
    }

    delete(value){
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value){
        if(!root){
            return null
        }

        if(value < root.value){
            root.left = this.deleteNode(root.left, value)
        }else if(value > root.value){
            root.right = this.deleteNode(root.right, value)
        }else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }
            if(!root.right){
                return root.left
            }

            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }

    secondLargest(root = this.root){
        if(!root || (!root.left && !root.right)) {
            return null
        }

        let prev = null

        const findLargest = (node)=> {
            if(!node.right){
                return node
            }
            prev = node
            return findLargest(node.right)
        }

        const largest = findLargest(root)

        if(largest.left){
            return findLargest(largest.left).value
        }

        return prev.value
    }

    countOfNodeWithOnlyRightChild(root = this.root){
        if(!root) {
            return 0
        }

        let count = 0;

        if(!root.left && root.right){
            count++
        }

        count += this.countOfNodeWithOnlyRightChild(root.left);
        count += this.countOfNodeWithOnlyRightChild(root.right)

        return count
    }

    sumOfLeafNodes(root = this.root){
        if(!root){
            return 0
        }
        let sum = 0
        if(!root.left && !root.right){
            sum += root.value
        }

        sum += this.sumOfLeafNodes(root.left)
        sum += this.sumOfLeafNodes(root.right)

        return sum
    }

    sumOfAllNodes(root = this.root){
        if(!root){
            return 0
        }

        let sum = root.value

        sum += this.sumOfAllNodes(root.left);
        sum += this.sumOfAllNodes(root.right)

        return sum
    }

    countSingleNodes(root = this.root){
        if(!root) {
            return 0
        }

        let count = 0

        if((!root.left && root.right) || (root.left && !root.right)) {
            count += 1
        }

        count += this.countSingleNodes(root.left);
        count += this.countSingleNodes(root.right);
        
        return count
    }

    kthLargest(k, root = this.root){
        let count = 0
        let result = null

        const reverseInOrder = (node) => {
            if(!node || count >= k) {
                return
            }

            reverseInOrder(node.right)

            if(count == k){
                result = node.value
                return
            }

            reverseInOrder(node.left)
        }

        reverseInOrder(root)

        return result;
    }

    

}

