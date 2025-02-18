class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0
    }

    isEmpty() {
        return this.size == 0
    }

    getSize() {
        return this.size
    }

    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++
    }

    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let curr = this.head
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = node;
        }
        this.size++
    }

    reverse() {
        let prev = null
        let curr = this.head
        let next
        while (curr) {
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    removeElement(value) {
        if (this.head.value == value) {
            this.head = this.head.next
            this.size--
            return
        }
        let curr = this.head
        while (curr.next && curr.next.value !== value) {
            curr = curr.next
        }
        if (curr.next) {
            curr.next = curr.next.next
            this.size--
            return
        } else {
            console.log('No such element')
        }
    }

    findMiddleElement() {
        let slow = this.head
        let fast = this.head
        while (fast && fast.value != null) {
            slow = slow.next
            fast = fast.next.next
        }
        return slow.value
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            console.log('CANNOT INSERT')
            return
        }
        if (index == 0) {
            this.prepend(value)
            return
        }

        if (index == this.size) {
            this.append(value)
            return
        }
        const node = new Node(value)
        let curr = this.head
        for (let i = 0; i < index - 1; i++) {
            curr = curr.next
        }
        node.next = curr.next
        curr.next = node;
        this.size++
    }

    removeIndex(index) {
        if (index < 0 || index >= this.size) {
            console.log('Cant remove')
            return
        }
        if (index == 0) {
            this.head = this.head.next;
            this.size--
            return
        }
        let curr = this.head
        for (let i = 0; i < index - 1; i++) {
            curr = curr.next
        }
        curr.next = curr.next.next
        this.size--
    }

    hasCycle() {
        let slow = this.head
        let fast = this.head
        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
            if (slow == fast) {
                return true;
            }
        }
        return false;
    }

    print(){
        let str = ''
        let curr = this.head
        while(curr) {
            str += `${curr.value} `
            curr = curr.next
        }

    }

}

// let list = new LinkedList()
// list.append(34)
// list.prepend(54)
// console.log(list)

//removeValue
//reverse
//insertvalue
//removeIndex

function Palindrome(str) {
    let list = new LinkedList();
    for(let i = 0 ; i < str.length ; i++){
        list.append(str[i])
    }
    //lis
}