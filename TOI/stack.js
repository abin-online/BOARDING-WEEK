class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null
        this.length = 0
    }

    isEmpty() {
        return this.length == 0
    }

    push(value) {
        const node = new Node(value)
        if(this.isEmpty()) {
            this.top = node
        }else{
            node.next = this.top;
            this.top = node
        }
        this.length++
    }

    pop() {
        if(this.isEmpty()) {
            return
        }
        const removeElement = this.top
        this.top = this.top.next
        return removeElement.value
    }

    print() {
        let curr = this.top;
        const result = []
        while(curr) {
            result.push(curr.value)
            curr = curr.next
        }
        return result.join(' ')
    }
}

const stack = new Stack()

stack.push(10)
stack.push(11)
stack.push(12)
stack.push(13)
stack.push(14)


console.log(stack.print())

stack.pop()

console.log(stack.print())



