class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class CicularLinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }

    prepend(value){
        const node = new Node(value)
        let prev = this.head
        while(prev.next != this.head){
            prev = prev.next
        }
        prev.next = node
        node.next = this.head
    }
}