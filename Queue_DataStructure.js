//Implement a Queue Data structure with the help of javaScript//
//Queue Works on FIFO management

//====================Start==============================
//Defining a ES6 class called Queue 
class Queue {
    //this constructor is called whenever this class instance is created
    constructor() {
        //consider an empty Array
        this.Array = [1, 2];
    }
    //Lets Now add a method called add()
    add(record) {
        //array.unshift add the record at start of the array
        this.Array.unshift(record);
        console.log(this.Array);
    }
    //add a remove method to get the last record out
    remove() {
        this.Array.pop();
        console.log(this.Array);
    }
}
var q = new Queue();
q.add(3);//Ouput --> [3,1,2]
q.remove();//ouput --> [3,1]
