class Node {
    value: any;
    next: any;
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  export class SinglyLinkedList {
    head: Node;
    tail: Node;
    length: number;
    constructor(value: any) {
      this.head = new Node(value);
      this.tail = this.head;
      this.length = 1;
    }
  
    append(newData): SinglyLinkedList {
      const newNode = new Node(newData);
      let currentNode = this.head;
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
  
    prepend(newData): SinglyLinkedList {
      const newNode = new Node(newData);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }
  
    insert(index, newData): SinglyLinkedList {
      if (index >= this.length) {
        return this.append(newData);
      }
  
      if (index == 0) {
        return this.prepend(newData);
      }
      const newNode = new Node(newData);
      let firstPointer = this.getTheIndex(index - 1);
      let tmp = firstPointer.next;
      firstPointer.next = newNode;
      newNode.next = tmp;
      this.length++;
      return this;
    }
  
    delete(index): SinglyLinkedList {
      if (index > this.length) {
        return;
      }
  
      if (index == 0) {
        this.head = this.head.next;
      } else {
        let firstPointer = this.getTheIndex(index - 1);
        let tmp = firstPointer.next;
        firstPointer.next = tmp.next;
      }
  
      this.length--;
      return this;
    }
  
    getTheIndex(index: number): Node {
      let currentNode = this.head;
      let counter = 0;
      while (counter < index) {
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
  }
  