class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class Stack {
    constructor(){
        this.top = null
        this.length = 0
    }

    isEmpty(){
        return this.length == 0
    }

    peek() {
        return this.top
    }

    push(value) {
        const node = new Node(value)
        if(this.top){
            node.next = this.top
        }
        this.top = node;
        this.length++
    }

    pop(){
        if(this.isEmpty()){
            return null
        }
        const popped = this.top.value
        this.top = this.top.next;
        this.length--
        return popped
    }

    reverse(){
        let prev = null
        let curr = this.top
        let next;
        while(curr){
            next = curr.next;
            curr.next = prev
            prev = curr
            curr = next
        }
        this.top = prev
    }

    toArray() {
        let arr = []
        let curr = this.top;
        while(curr){
            arr.push(curr.value);
            curr = curr.next
        }
        return arr
    }
}