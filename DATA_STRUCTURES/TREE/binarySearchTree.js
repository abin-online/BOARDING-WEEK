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

    levelOrder() {
        let queue = []
        queue.push(this.root);
        while (queue.length) {
            const curr = queue.shift()
            console.log(curr.value);
            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right)
            }
        }
    }

    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    postOrder(root) {
        if (root) {
            this.postOrder(root.left)
            console.log(root.value);
            this.postOrder(root.right)
        }
    }

    inOrder(root) {
        if (root) {
            this.inOrder(root.left)
            this.inOrder(root.right)
            console.log(root.value);
        }
    }

    min(root) {
        if (!root.left) {
            return root.value
        } else {
            return this.min(root.left)
        }
    }

    max(root) {
        if (!root.right) {
            return root.value
        } else {
            this.max(root.right)
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value) {
        if (!root) {
            return null
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value)
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value)
        } else {
            if (!root.left && !root.right) {
                return null
            }
            if (!root.left) {
                return right
            }
            if (!root.right) {
                return left
            }
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, root.value)
        }
    }

    has(value, root = this.root) {
        if (!root) {
            return false
        }
        if (value == root.value) {
            return true
        }
        if (value < root.value) {
            this.has(root.left, value)
        } else {
            this.has(root.right, value)
        }
    }

    findClosest(target) {
        return this.findClosestValue(this.root, target, this.root.value);
    }

    findClosestValue(node, target, closest) {
        if (node == null) {
            return closest
        }

        if (Math.abs(target - closest) > Math.abs(target - node.value)) {
            closest = target
        }

        if (target < node.value) {
            return this.findClosestValue(node.left, target, closest)
        } else if (target > node.value) {
            return this.findClosestValue(node.right, target, closest)
        } else {
            return closest;
        }
    }

    height(root = this.root) {
        if (!root) {
            return -1
        }
        return Math.max(this.height(root.left), this.height(root.right)) + 1
    }

    isBST(root = this.root, min = -Infinity, max = Infinity) {
        if (!root) {
            return true;
        }

        if (root.value <= min || root.value >= max) {
            return false;
        }

        return this.isBST(root.left, min, root.value) && this.isBST(root.right, root.value, max)
    }

    isBalanced(root = this.root) {
        if (!root) {
            return true
        }

        let leftHeight = this.isBalanced(root.left);
        let rightHeight = this.isBalanced(root.right);

        if (Math.abs(leftHeight - rightHeight) > 1) {
            return false
        }

        return this.isBalanced(root.left) && this.isBalanced(root.right);
    }

}