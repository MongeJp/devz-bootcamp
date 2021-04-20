class Node {
  value: any;
  next: Node;
  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}
class MySinglyLinkedList {
  head: Node;
  tail: Node;
  length: number;
  constructor(value: any) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(newData) {
    const newNode = new Node(newData);
    let currentNode = this.head;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    // return this;
  }

  prepend(newData) {
    const newNode = new Node(newData);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    // return this;
  }

  insert(index, newData) {
    if (index >= this.length) {
      return this.append(newData);
    }

    if (index == 1) {
      return this.prepend(newData);
    }
    const newNode = new Node(newData);
    let firstPointer = this.getTheIndex(index - 1);
    let tmp = firstPointer.next;
    firstPointer.next = newNode;
    newNode.next = tmp;
    this.length++;
    // return this;
  }

  delete(index) {
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
  }

  getTheIndex(index) {
    let currentNode = this.head;
    let counter = 0;
    while (counter < index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

let myLinkedList = new MySinglyLinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
// myLinkedList.insert(2, 10);
myLinkedList.delete(1);
myLinkedList;
