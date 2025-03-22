class Stack {
    constructor() {
        this.item = []
    }

    push(value) {
        this.item.push(value)
    }

    isEmpty() {
        return this.item.length == 0
    }
 
    pop() {
        if (this.isEmpty()) {
            return null
        }
        return this.item.pop()
    }

    push(value){
        this.item.push(value)
    }
    
}