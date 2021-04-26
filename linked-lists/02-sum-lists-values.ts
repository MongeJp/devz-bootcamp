import { SinglyLinkedList } from './singlyLinkedList';

/* Tienes dos números representados por dos linked lists donde el valor de cada nodo
representa un dígito. Los dígitos están guardados de manera inversa, de manera que
las unidades está en el primer nodo (head), las decenas en el segundo nodo, etc.
Escribe un programa que dado dos linked lists, sume los dos números que
representan y regrese esa suma representada también en un linked list. */

/* 
In: a: 2 → 3 → 1. b: 6 → 0 → 3. Equivale a 132 + 306
Out: resultado: 8 → 3 → 4. Equivale a 438 
*/

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
    let firstNumber = sumValues(linkedListOne);
    let secondNumber = sumValues(linkedListTwo);
    let total = firstNumber + secondNumber;
    let newLinkedList = new SinglyLinkedList();
    let totalInStr = total.toString();
    for (let index = 0; index < totalInStr.length; index++) {
        const element = totalInStr[index];
        newLinkedList.append(element);
    }
    return newLinkedList;
};

const sumValues = (list: SinglyLinkedList) => {
    let currentNode = list.head;
    let value = '';
    value = value + currentNode.value;
    while (currentNode.next !== null) {
        let nextNode = currentNode.next;
        value = value + nextNode.value;
        currentNode = currentNode.next;
    }
    return Number(value);
};

sumLists(firstList, secondList); // 8 -> 3 -> 4  === 438