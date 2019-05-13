function Node(val) {
    this.val = val;
    this.head = this.val;
    this.next = null;
}

function SinglyLinkedList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
}

this.SinglyLinkedList.prototype.push = function(value) {
   let node = new Node(value);
    
   if (this.head === null) {
        this.head = node;
    } else {
        this.tail = this.head;
        while (this.tail.next) {
            this.tail = this.tail.next;
        }
        this.tail.next = node;
    }
    this.length++;

    return this;
}

this.SinglyLinkedList.prototype.pop = function() {
    let deletedNode = undefined;
    let current = this.head;
    if (current === null) {
        return deletedNode;
    }

    while(current.next) {
        current = current.next;
        if(current.next.next === null) {
            deletedNode = current.next.val;
            this.tail = current;
            this.tail.next = null;
        }
    }
    this.length--;
    
    return deletedNode;
}