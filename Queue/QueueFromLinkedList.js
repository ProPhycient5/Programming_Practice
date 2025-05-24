class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() {             //first or top element
      return this.first;
    }
    enqueue(value) {
      const newNode = new Node(value);
      if(this.length === 0){
        this.first = newNode;
        this.last = newNode;
      }else{
        this.last.next = newNode;
        this.last = newNode;
      }
      this.length++;
      return this;
    }
    dequeue() {
      if (this.length === 0){
        return null;
      }
      
      if (this.length === 1){
        this.last = null;
      }
      this.first = this.first.next;
      this.length--;
      return this;
    }
  }

  const myQueue = new Queue();
  
  console.log(myQueue.enqueue("JOY"));
   console.log(myQueue.enqueue("Matt"));
  // console.log(myQueue.dequeue());

  //Joy
  //Matt
  //Pavel
  //Samir