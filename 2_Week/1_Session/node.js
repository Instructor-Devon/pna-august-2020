class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }
    shift(value) { //(add node to front of list)
        var newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    } 
    displayValues() {
        // loop through list from hed until node.next is null
        var current = this.head;
        while(current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
    contains(searchValue) {
        var current = this.head;
        while(current !== null) {
            if(searchValue === current.data) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
    // push (add node to back of list)
}

var myList = new SinglyLinkedList();

myList.shift(10);
myList.shift(9);
myList.shift(8);
myList.shift(7);
myList.displayValues();
console.log(myList.contains(10)) // expect to be True
console.log(myList.contains(19)) // expect to be False
