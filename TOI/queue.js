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
    }

    isEmpty() {
        return this.length == 0
    }

    enqueue(value) {
        const node = new Node(value);
        if (!this.front) {
            this.front = this.rear = node
        } else {
            this.rear.next = node
            this.rear = node
        }
        this.length++
    }

    dequeue() {
        if (this.length == 0) {
            return
        }
        const removeNode = this.front;
        this.front = this.front.next;
        this.length--
        if (!this.front) {
            this.rear = null
        }
    }

    print() {
        let curr = this.front
        const result = []
        while (curr) {
            result.push(curr.value)
            curr = curr.next
        }
        console.log(result.join(' '))
    }
}

const Q = new Queue()

Q.enqueue(10)
Q.enqueue(11)
Q.enqueue(12)
Q.enqueue(13)

Q.print()

Q.dequeue()

Q.print()