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
    isEmpty() {
        return this.root === null;
    }
    min() {
        // check if tree is empty
        if(this.isEmpty()) {
            return null;
        }
        // go left all the way!
        // while node.left !== null
        var node = this.root;
        
        while(node.left !== null) {
            node = node.left;
        }
        return node.value;
    }
    max() {
        // check if tree is empty
        if(this.isEmpty()) {
            return null;
        }
        // go left all the way!
        // while node.left !== null
        var node = this.root;
        
        while(node.right !== null) {
            node = node.right;
        }
        return node.value;
    }
    height(node=this.root) {
        // base case!
        if(node === null) {
            return 0;
        }
        return 1 + Math.max(this.height(node.left), this.height(node.right));
    }
    
    add(value, node=this.root) {
        // do we have an empty tree?
        if(this.isEmpty()) {
            // if so we need to establish a root
            this.root = new BSTNode(value);
            return this;
        }
        // If a node already exist?
        if(node === null) {
            return this;
        }

        // if we have node, which direction should we add one?
        if(value < node.value) {
            // going left!
             // check the side we want to go, for if there is a node there!
            if(node.left) {
                return this.add(value, node.left);
            }
            node.left = new BSTNode(value);
            return this;
        } else {
            if(node.right) {
                return this.add(value, node.right);
            }
            node.right = new BSTNode(value);
            return this
        }
        // check the side we want to go, for if there is a node there!
    }



    displayValues(node=this.root) {
        // does "node" exist?
        if(node !== null) {
            this.displayValues(node.left);
            console.log(node.value);
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
    toSortedArray(node=this.root, array) {
        if(!array) {
            array = [];
        };
        if(!node) {
            return array;
        }
        else {
            this.toSortedArray(node.left, array);
            array.push(node.value);
            this.toSortedArray(node.right, array);
        }
        // returns an array with values sorted in ascending order
        return array;
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
console.log(tree.height())