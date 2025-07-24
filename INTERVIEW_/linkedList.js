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
        return this.head == null;
    }

    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head;
            while (prev.next != null) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    prepend(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head = node
        this.size++
    }

    display() {
        const result = [];
        let curr = this.head
        while (curr) {
            result.push(curr.value);
            curr = curr.next;
        }
        return result.join(' -> ')
    }
}

const linkedList = new LinkedList()

linkedList.append(76)
linkedList.append(56)
linkedList.append(96)
linkedList.append(74)
linkedList.append(71)
linkedList.prepend(56)

console.log(linkedList.display());
