class Node{
    constructor(value){
        this.value= value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }

    prepend(value){
        const newNode = new Node(value);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        }else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    append(value){
        const newNode = new Node(value);
        if(this.isEmpty()){
            this.head = newNode;
            this.tail = newNode;
        }else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    removeFromFront(){
        if(this.isEmpty()){
            return null;
        }
        const value = this.head.value;
        this.head = this.head.next;
        if(this.head){
            this.head.prev = null;
        }else{
            this.tail = null;
        }
        this.size--;
        return value;
    }

    removeFromEnd(){
        if(this.isEmpty()){
            return null;
        }
        const value = this.tail.value;
        this.tail = this.tail.prev;
        if(this.tail){
            this.tail.next = null;
        }else{
            this.head = null;
        }
        this.size--;
        return value;
    }

    print(){
        let current = this.head;
        const listValues = [];
        while(current){
            listValues.push(current.value);
            current = current.next;
        }
        return listValues.join(' <-> ');
    }
}

const doubleLL = new DoublyLinkedList();
console.log(doubleLL.isEmpty());
doubleLL.append(10);
doubleLL.append(20);
doubleLL.append(30);

console.log(doubleLL.getSize());
console.log(doubleLL.print());

doubleLL.prepend(5);
console.log(doubleLL.print());

console.log(doubleLL.removeFromFront());
console.log(doubleLL.print());
console.log(doubleLL.removeFromEnd());
console.log(doubleLL.print());
console.log(doubleLL.getSize());
