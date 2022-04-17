class SLLNode {
    constructor(val) {
        this.value = val;
        this.next = nulll;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }  
    addFront(val) {
        let new_node = new Node(val);
        if(!this.head) {
            this.head = new_node;
            return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        return this;
    }
    
    removeFront() {
        if (this.head == null) {
            return this.head;
        }
        var removedNode = this.head;
        this.head = removedNode.next;
        removedNode.next = null;
        return this.head;
    }

    front() {
        if (this.head == null) {
            return null;
        } else {
            return this.head.value;
        }
    }
}
