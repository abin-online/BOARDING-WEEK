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
        if (!root) {
            return -1
        }

        return Math.max(this.heightOfTree(root.left), this.heightOfTree(root.right)) + 1;
    }

    isBalanced(root = this.root) {
        if (!root) {
            return true;
        }

        if (Math.abs(this.heightOfTree(root.left) - this.heightOfTree(root.right)) > 1) {
            return false
        }

        return this.isBalanced(root.left) && this.isBalanced(root.right)
    }

    diameterOfTree(root = this.root) {
        if (!root) {
            return 0
        }

        //height of left & right subtrees
        let leftHeight = this.heightOfTree(root.left);
        let rightHeight = this.heightOfTree(root.right);

        //diameter passing through root
        let rootDiameter = leftHeight + rightHeight;

        //diameter in left & right subtrees
        let leftDiameter = this.diameterOfTree(root.left);
        let rightDiameter = this.diameterOfTree(root.right);

        //maximum diameter
        return Math.max(rootDiameter, leftDiameter, rightDiameter)
    }

    sortedArrayToBST(nums) {
        if (!nums.length) {
            return null
        }

        const buildBST = (left, right) => {
            if (left > right) {
                return null
            }

            let middle = Math.floor((left + right)/2);
            const root = new Node(nums[middle]);
            root.left = buildBST(left, middle - 1);
            root.right = buildBST(middle + 1, right)

            return root
        }

        return buildBST(0, nums.length - 1);
        
    }

    largest(root = this.root) {
        while(!root.right) {
            root = root.right
        }

        return root.value
    }

    secondLargest(root = this.root){
        if((!root) || (!root.left && !root.right)) {
            return null
        }

        let prev = null;

        const findLargest = ()=> {
            if(!root.right){
                return root
            }
                prev = root;
                return largest(root.right);
        }

        let largest = findLargest(root);

        if(largest.left){
            return findLargest(largest.left).value
        }

        return prev.value
    }

}

const tree = new Tree()

tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(7)

console.log('largest',tree.largest())


//tree.preOrder()

//console.log(tree)

//console.log(tree.inOrder())


console.log('3rd largest ')
console.log(tree.kthLargest(3))
console.log('heightOfTree ')
console.log(tree.heightOfTree())
//console.log(tree.countLeafNodes())