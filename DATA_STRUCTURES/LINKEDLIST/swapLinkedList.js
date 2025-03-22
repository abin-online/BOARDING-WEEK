class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty(){
        return this.size == 0
    }

    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    swap(){
        if(this.size < 2) {
            return
        }
        let prev = this.head;
        while(prev.next != this.tail){
            prev = prev.next;
        }
        this.tail.next = this.head.next;
        prev.next = this.head;
        this.head.next = null;
        [this.head, this.tail] =
        [this.tail, this.head]
    }
}


const list = new LinkedList();
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
console.log('Before swapping');

console.log(list);

list.swap()
console.log('After swapping');

console.log(list);


