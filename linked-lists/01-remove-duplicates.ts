import { SinglyLinkedList } from './singlyLinkedList';

const removeDuplicates = (list: SinglyLinkedList): SinglyLinkedList => {
    let currentNode = list.head;
    let values = new Set();
    values.add(currentNode.value);
    while (currentNode.next !== null) {
        let tmp = currentNode.next;
        if (values.has(tmp.value)) {
            currentNode.next = tmp.next;
            list.length--;
        } else {
            values.add(currentNode.next.value);
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