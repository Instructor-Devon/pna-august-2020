

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
    
    rCount(node=this.head) {
        if(node === null) {
            return 0;
        }
        return 1 + this.rCount(node.next)
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
    deleteAllNodes() {
        this.head = null;
    }
    isEmpty() {
        // true/false
        // is this list empty?
        return this.head === null;
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
    unshift() {
        // remove the first node!
        // BUT preserve all other nodes!
        if(!this.isEmpty()) {
            // return the value after we delete!
            var temp = this.head.data;
            this.head = this.head.next;
            return temp;
        } else {
            throw Error("LIST IS ALREADY EMPTY YOU FOOL!")
        }
    }
    push(value) {
        // add new node to the end of the list
        if(this.isEmpty()) {
            return this.shift(value);
        }
        // create the node!
        var newNode = new Node(value);

        // traverse to the last node!
        var current = this.head;
        while(current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }
    pop() {
        // remove from end, return removed node's value(data)

        // edge cases!
        if(this.isEmpty()) {
            // empty list (nothing to remove)
            return undefined;
        } else if(this.head.next === null) {
            // only one item
            return this.unshift();
        }

        // loop to the next to last node!
        var current = this.head;
        while(current.next.next) {
            current = current.next;
        }
        // node's value in temp
        var temp = current.data;
        // sever the tie
        current.next = null;
        // return temp
        return temp;
    }
}

var myList = new SinglyLinkedList();

myList.shift(10);
myList.push(11);
myList.push(12);
myList.rCount();
