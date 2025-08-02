class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node
        }
        this.size++;
    }

    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else {
            let prev = this.head;
            while(prev.next){
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }

    insert(value, index){
        if(index < 0 || index > this.size){
            return 'Invalid index';
        }
        if(index === 0){
            this.prepend(value);
        }else {
            const node = new Node(value)
            let prev = this.head
            for(let i=0; i<index-1; i++){
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    removeFromIndex(index){
        if(index < 0 || index >= this.size){
            return null;
        }
        let removeNode
        if(index === 0){
            removeNode = this.head;
            this.head = this.head.next; 
        }else{
            let prev = this.head;
            for(let i=0; i<index-1; i++){
                prev = prev.next;
            }
            removeNode = prev.next;
            prev.next = removeNode.next;
        }
        this.size--;
        return removeNode.value;
    }

    removeFromValue(value){
        if(this.isEmpty()){
            return null;
        }
        if(this.head.value === value){
            this.head = this.head.next
            this.size--
            return value
        }else{
            let prev = this.head;
            while(prev.next && prev.next.value !== value){
                prev = prev.next;
            }
            if(prev.next){
                const removeNode = prev.next
                prev.next = removeNode.next
                this.size--
                return value
            }
            return null;
        }
    }

    print(){
        if(this.isEmpty()){
            console.log('Linked list is empty');
        }else{
            let current = this.head;
            let listValues = ''
            while(current){
                listValues += current.value + ' '
                current = current.next
            }
            console.log(listValues);
        }
    }
}

const list = new LinkedList();
console.log(list.isEmpty());
console.log(list.getSize());
list.print();
// list.prepend(10);
// list.print();

// list.append(20);
// list.print();

// list.append(30);
// list.print();

// list.append(40);
// list.print();

list.insert(10, 0);
list.print()

list.insert(20, 0);
list.print();

list.insert(30, 1)
list.print();

list.insert(40, 2)
list.print();

// console.log(list.removeFromIndex(10)); 


// console.log(list.removeFromIndex(0));
// list.print();

// console.log(list.removeFromIndex(1));
// list.print();
// console.log(list.getSize());

console.log(list.removeFromValue(40));
list.print()

console.log(list.removeFromValue(30));
list.print()