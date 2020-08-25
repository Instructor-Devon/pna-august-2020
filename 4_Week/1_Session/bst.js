class BSTNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor() {
        this.root = null;
    }
    add(value, node=this.root) {
        // if tree is empty, set root to the new node!
        if(this.root === null) {
            this.root = new BSTNode(value);
            return this;
        }
        // where is the new node going to go?


        // is it left?
        if(value < node.value) {
            // does "node" have a left?
            if(node.left === null) {
                node.left = new BSTNode(value);
                return this;
            } else {
            // node here! we must descend!
                return this.add(value, node.left);
            }
        } else {
        // is it right?
            if(node.right === null) {
                node.right = new BSTNode(value);
                return this;
            } else {
            // node here! we must descend!
                return this.add(value, node.right);
            }
        }
    }
    displayValues(node=this.root) {
        // does "node" exist?
        if(node !== null) {
            console.log(node.value);
            this.displayValues(node.left);
            this.displayValues(node.right);
            // if so, print it!
            // and... look to the left/right
        }
    }
    size(node=this.root) {
        // if a node is here
        if(node !== null) {
            // return 1, plus all children
            return 1 + this.size(node.left) + this.size(node.right);
        }
        else {
            return 0;
        }
        // if not, return 0 (null nodes get counted as "0")
    }
    contains(value, node=this.root) {
        if(node) {
            // node has value
            if(node.value === value) {
                return true;
            }
            // OR
            // node doesn't have our value
            if(node.value > value) {
                return this.contains(value, node.left);
            } else {
                return this.contains(value, node.right);
            }
        }
        else {
            return false;
        }
    }
}
var tree = new BST();
tree.add(5).add(2).add(12).add(1).add(3).add(9).add(21).add(19).add(25);
console.log(tree.contains(4)); // false
console.log(tree.contains(25)); // true