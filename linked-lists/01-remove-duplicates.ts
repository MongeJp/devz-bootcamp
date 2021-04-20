import { SinglyLinkedList } from './singlyLinkedList';

const removeDuplicates = (list: SinglyLinkedList): SinglyLinkedList => {
    let currentNode = list.head;
    let numbers = new Set();
    numbers.add(currentNode.value);
    while (currentNode.next !== null) {
        let tmp = currentNode.next;
        if (numbers.has(tmp.value)) {
            currentNode.next = tmp.next;
            list.length--;
        } else {
            numbers.add(currentNode.next.value);
            currentNode = currentNode.next;
        }
    }
    list.tail = currentNode;
    return list;
}

const linkedList = new SinglyLinkedList(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(3);
linkedList.append(2);
linkedList.append(1);
removeDuplicates(linkedList);