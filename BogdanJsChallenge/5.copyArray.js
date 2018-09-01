//create a copy of array
//example
var a = [1, 2, 3];

var b;

//using assigment operator will not get the output
//b = a
//because refrence pointer is copied when changing an array both the array will be changed

b = a.slice();
// OR
b = [...a];

b.push("newElement");

console.log(a);
//output should be [1,2,3]

console.log(b);
//output should be [1,2,3,newElement]
