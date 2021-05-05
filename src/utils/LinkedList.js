class LinkedListNode {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.node = new LinkedListNode(value);
        this.head = this.node;
        this.tail = this.node;
    }
}

export default LinkedList;