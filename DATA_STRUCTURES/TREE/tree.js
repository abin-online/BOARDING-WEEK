class Node {
    constructor(value) {
        this.value = value
        this.children = []
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
        if(this.isEmpty()) {
            this.root = node
        }else{
            
        }
    }
}