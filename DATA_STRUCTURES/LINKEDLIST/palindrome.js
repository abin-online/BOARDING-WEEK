class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }
    
    isEmpty() {
        return this.size == 0
    }
    
    append(value) {
        const node = new Node(value)
        if(this.isEmpty()){
            node.next = this.head
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node;
        }
        this.size++
        return value
    }
    
    prepend(value) {
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
        return value
    }
    
    reverse(){
        let prev = null
        let curr = this.head
        let next;
        while(curr){
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }
    
    print(){
        let curr = this.head
        let result = []
        while(curr) {
            result.push(curr.value);
            curr = curr.next
        }
        return result.join('')
    }
}

const list = new LinkedList()


let word ='MALAYALAM';

function palindrome(word) {
    
    const list = new LinkedList()
    for(let i of word){
        
        list.append(i)
    }
    let originalString = list.print()
    list.reverse()
    let reverse = list.print()
    
    return reverse == originalString ? true : false
}

console.log(palindrome(word))


