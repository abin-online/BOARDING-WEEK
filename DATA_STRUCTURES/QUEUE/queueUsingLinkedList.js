class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor(capacity) {
        this.front = null
        this.rear = null
        this.length = 0
        this.capacity = capacity
    }

    isEmpty() {
        return this.length == 0
    }

    clear() {
        this.front = this.rear = null
    }

    isFull() {
        return this.length == this.capacity
    }

    enqueue(value) {
        const node = new Node(value);
        if(this.isFull()) {
            return 'QUEUE IS FULL'
        }
        if (!this.front) {
            this.front = this.rear = node
        } else {
            this.rear.next = node;
            this.rear = node
        }
        this.length++
        return
    }

    dequeue(value) {
        const node = new Node(value);
        if (!this.front) {
            return null
        }
        let removeNode = this.front
        this.front = this.front.next
        if (!this.front) {
            this.rear = null
        }
        this.length--
        return removeNode.value;
    }

    print() {
        let curr = this.front;
        let result = []
        while (curr) {
            result.push(curr.value)
            curr = curr.next
        }
        return result.join('->')
    }
}