export class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.current = this;
        this.previous = null;
    }
}

export class LinkedList {
    constructor(node) {
        this.head = node;
        this.tail = node;
    }

    append(value) {
        const node = new Node(value);
        
        node.previous = this.tail;
        this.tail.next = node;
        this.tail = node;
    }

    remove() {
        if(!this.head) {
            return null;
        }

        const node = this.tail.previous;
        node.next = null;
        this.tail = node;
    }
}