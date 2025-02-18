class Node {
    constructor(value) {
        this.value = value
        this.prev = null
        this.next = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size == 0
    }

    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            node.prev = null
        } else {
            node.next = this.head
            this.head.prev = node
        }
        this.size++
    }

    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
            node.prev = prev
        }
        this.size++
    }

    remove(value) {
        if (this.isEmpty()) {
            return null
        }
        if (this.head.value == value) {
            this.head = this.head.next
            this.size--
            return
        }

        let prev = this.head
        while (prev.next && prev.next.value != value) {
            prev = prev.next
        }
        if (prev.next) {
            let removeNode = prev.next
            prev.next = removeNode.next
            if (removeNode.next) {
                removeNode.next.prev = prev
            }
            this.size--
        }
    }
}

