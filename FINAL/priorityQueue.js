class PriorityQueue {
    constructor() {
        this.items = []
    }

    isEmpty() {
        return this.items.length == 0
    }

    getLeftChildIndex(index) {
        return 2 * index + 1
    }

    getRightChildIndex(index) {
        return 2 * index + 2
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2)
    }

    insert(value) {
        this.items.push(value)
        this.heapifyUp(this.items.length - 1)
    }

    heapifyUp(index) {
        let parentIndex = this.getParentIndex(index);
        while (index > 0 && this.items[index] > this.items[parentIndex]) {
            [this.items[index], this.items[parentIndex]] =
                [this.items[parentIndex], this.items[index]];
            index = parentIndex;
            parentIndex = this.getParentIndex(index)
        }
    }

    remove() {
        if (this.isEmpty()) {
            return null
        }

        if (this.items.length === 1) {
            return this.items.pop()
        }

        const root = this.items[0];
        this.items[0] = this.items.pop()
        this.heapifyDown(0);
        return root
    }

    heapifyDown(index) {
        let largest = index
        let leftChildIndex = this.getLeftChildIndex(index);
        let rightChildIndex = this.getRightChildIndex(index);

        if (leftChildIndex < this.items.length && this.items[leftChildIndex] > this.items[largest]) {
            largest = leftChildIndex
        }

        if (rightChildIndex < this.items.length && this.items[rightChildIndex] > this.items[largest]) {
            largest = rightChildIndex
        }

        if (index != largest) {
            [this.items[index], this.items[largest]] = [this.items[largest], this.items[index]];
            this.heapifyDown(largest)
        }
    }
}

const queue = new PriorityQueue();

// queue.insert(11);
// queue.insert(15);
// queue.insert(13);
// queue.insert(10);
// queue.insert(14);
// queue.insert(12);


// console.log(queue.remove())

const nums = [2, 4, 5, 1, 34, 67, 23, 5];

function kthLargest(k, nums) {
    if (k > nums.length) {
        return null
    }
    const queue = new PriorityQueue();
    for (let num of nums) {
        queue.insert(num)
    }
    let result = null
    for (let i = 0; i < k; i++) {
        result = queue.remove()
    }

    return result
}

console.log(kthLargest(8 + 1, nums))