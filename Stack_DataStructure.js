//Implement a Stack DataStructure 
//Stack work on principle of FILO(first In Last Out)
//stack class should contain with push,pop,peek method 
//Adding an element to the stack should store it until it is removed

//Create ES6 class Stack 
class Stack {
    //this constructor is called whenever this class instance is created
    constructor() {
        this.myStack = [1, 2];
    }
    //let add a Push method to insert the record
    push(record) {
        console.log('Initial Stack- ' + this.myStack)
        this.myStack.push(record);
        console.log('pushStack- ' + this.myStack);
    }
    //let add a Pop method to pop-out last record from the stack array
    pop() {

        return console.log('popStack- ' + this.myStack.pop());
    }
    //let add a Peek method to return last element from the stack array without Removing it
    peek() {
        return console.log('Peek- ' + this.myStack[this.myStack.length - 1]);
    }
}
const s = new Stack();
s.push(3);//output --> Initial Stack- 1,2
          //           pushStack- 1,2,3
s.peek(); //           Peek- 3
s.pop();  //           PopStack- 3
