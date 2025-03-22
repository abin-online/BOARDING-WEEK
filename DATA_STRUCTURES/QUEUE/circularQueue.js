class CircularQueue {
    constructor(capacity) {
        this.capacity = capacity;
        this.length = 0;
        this.rear = -1;
        this.front = 0;
        this.queue = new Array(capacity)
    }

    enqueue(value) {
        if (this.isFull()) {
            console.log('Queue is Full');
            return
        }
        this.rear = (this.rear + 1) % this.capacity;
        this.queue[this.rear] = value
        this.length++
    }

    isFull() {
        return this.capacity == this.length
    }

    isEmpty() {
        return this.length == 0
    }

    dequeue(value) {
        if (this.isEmpty()) {
            console.log('Empty !');
            return null
        }
        let removed = this.queue[this.front]
        this.front = (this.front + 1) % this.capacity;
        this.length--
        return removed
    }

    print() {
        let result = []
        for (let i = 0; i < this.length; i++) {
            const index = (this.front + 1) % this.capacity;
            result.push(this.queue[index])
        }
        return result.join(" ")
    }
}