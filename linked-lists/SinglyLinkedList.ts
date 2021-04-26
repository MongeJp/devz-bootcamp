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
  constructor() {
    this.length = 0;
  }
  append(newData): SinglyLinkedList {
    const newNode = new Node(newData);
    if (this.length == 0) {
      this.head = newNode;
      this.tail = this.head;
      this.length = 1;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    // return this;
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

const firstList = new SinglyLinkedList();
firstList.append(2);
firstList.append(3);
firstList.append(1);
// 2 -> 3 -> 1

const secondList = new SinglyLinkedList();
secondList.append(6);
secondList.append(0);
secondList.append(3);
// 6 -> 0 -> 3

const sumLists = (linkedListOne, linkedListTwo): SinglyLinkedList => {
  console.log(linkedListOne);
  return;
  let firstNumber = sumListValues(linkedListOne);
  let secondNumber = sumListValues(linkedListTwo);
  let total = firstNumber + secondNumber;
  let newLinkedList = new SinglyLinkedList();
  let totalInStr = total.toString();
  for (let index = 0; index < totalInStr.length; index++) {
    const element = totalInStr[index];
    newLinkedList.append(element);
  }
  return newLinkedList;
};

const sumListValues = (list: SinglyLinkedList) => {
  let currentNode = list.head;
  let value = '';
  value = value + currentNode.value;
  console.log(value); return;
  while (currentNode.next !== null) {
    console.log(currentNode.next);
    let nextNode = currentNode.next;
    value = value + nextNode.value;
    nextNode = currentNode.next;
  }
  return Number(value);
};

sumLists(firstList, secondList);
