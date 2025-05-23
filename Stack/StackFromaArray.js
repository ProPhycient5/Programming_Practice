class StackFromArray{
  constructor(){
   this.array = [];
  }
  
  peek(){                //return the last item
    return this.array[this.array.length - 1];
  }
  
  push(value){
    this.array.push(value);
    return this;
  }
  
  pop(){
    this.array.pop();
    return this;
  }
}



const myStack = new StackFromArray();


myStack.push("Google");
myStack.push("Udemy");
myStack.push("Discord");

myStack.pop();

console.log(myStack);
console.log(myStack.peek())






