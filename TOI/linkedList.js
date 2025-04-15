class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.head == null
    }

    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    print() {
        let curr = this.head
        let listed = ''
        while (curr) {
            listed += `${curr.value}`
            curr = curr.next
        }
        return listed
    }

    hasCycle() {
        let slow = this.head
        let fast = this.head
        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next
            if (slow == fast) {
                return true
            }
        }
        return false
    }

    toCycle() {
        let prev = this.head
        while (prev.next != null) {
            prev = prev.next
        }
        prev.next = this.head
    }
}

const list = new LinkedList()


list.append(10)
list.append(11)
list.append(12)
list.append(13)
list.append(14)
list.append(15)


list.toCycle()
console.log(list.hasCycle())

// function isPalindrome(str) {

//     const linkedList = new LinkedList()

//     for (let char of str) {
//         linkedList.prepend(char)
//     }

//     return str == linkedList.print()
// }


// console.log(isPalindrome('malayahbdsjbf'))
