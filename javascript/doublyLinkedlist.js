//doubly linked list
const nodesList = new Array();

class Node {
    constructor(data){
        this.previous = null;
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){

        this.head = null;
        this.oldNode = null;

    }

    push(data){
        const node = new Node(data);
        nodesList.push(node);

        if(this.head === null){
            node.previous = null;
            node.next = null;
            this.head = node;
        }else{
            this.oldNode.next = node;
            node.previous = this.oldNode;
            node.next = null;
        }

        this.oldNode = node;

    }

    insertBefore(data, index){
      const getNode = nodesList[index];

      const newNode = new Node(data);
      newNode.next = getNode;
      newNode.previous = getNode.previous;

      if(this.head === getNode){
        getNode.previous = newNode;
        this.head = newNode;
      }else{
        getNode.previous.next = newNode;
      }

      getNode.previous = newNode;
      
    }

    insertAfter(data, index){       
       const getNode = nodesList[index];

       const newNode = new Node(data);
       newNode.next = getNode.next;
       getNode.next = newNode;
       newNode.previous = getNode;

    }

    update(newData, index){
      const node = nodesList[index];
      node.data = newData;
    }

    get(index){
       return nodesList[index];
    }

    print(){
        let tempNode = this.head;
        while(tempNode){
            console.log(tempNode.data);
            tempNode = tempNode.next;
        }
    }
}

const list = new LinkedList(); //worst-case time complexity is O(1)
list.push(5);
list.push(6);
list.push(7);
list.push(8);

// list.insertBefore(4, 0);
list.insertAfter(45, 0);

// list.update(88,0);

// console.log(list.get(0));

list.print();
