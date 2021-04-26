class Node {
    value: any;
    next: any;
    prev: any;
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

export class DoublyLinkedList {
    head: Node;
    tail: Node;
    length: number;

    constructor() {
        this.length = 0;
    }

    append(newData): DoublyLinkedList {
        const newNode = new Node(newData);
        if (this.length == 0) {
            this.head = newNode;
            this.tail = this.head;
            this.length = 1;
            return;
        }
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
}

