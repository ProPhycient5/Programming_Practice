class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  
  peek(){                //return the last item //O(1)
    return this.top;
  }
  
  push(value){                       //O(1)
    const newNode = new Node(value);
    if(this.length === 0){
      this.top = newNode;
      this.bottom = newNode;
    } else{
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }
  
  pop(){                       //O(1)
    if(this.length === 0){
      return null;
    }
    if (this.length === 1){
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;
    return this;
  }
}



const myStack = new Stack();


myStack.push("Google");
myStack.push("Udemy");
myStack.push("Discord");

myStack.pop();

console.log(myStack);
console.log(myStack.peek());