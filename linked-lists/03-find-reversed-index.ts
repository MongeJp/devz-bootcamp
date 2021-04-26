import { DoublyLinkedList } from "./DoublyLinkedList";

const linkedList = new DoublyLinkedList();
linkedList.append(2);
linkedList.append(3);
linkedList.append(1);
linkedList.append(4);
linkedList.append(9);
linkedList.append(10);
linkedList.append(11);

function findReversedIndex(list: DoublyLinkedList, index: number) {
    if (index >= list.length) return;
    let currentNode = list.tail;
    let counter = 0;
    while (counter !== index) {
        currentNode = currentNode.prev;
        counter++;
    }
    return currentNode.value;
}

findReversedIndex(linkedList, 2);

