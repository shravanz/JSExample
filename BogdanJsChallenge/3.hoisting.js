//==================Hoisting challenge======================================

//Example
// var a = 5;
// b = 10;

// if (b > a) {
//   c = a + b + c;
//   let c = 2; // (we are using let which will not be hoisted instead use var keyword)
//   console.log(c);
//          //output ==> Uncaught ref Err : c is not defined
// }

// console.log(c);
//          //output ==> Uncaught ref Err : c is not defined

var a = 5;
b = 10;

if (b > a) {
  c = a + b + c;
  var c = 2; //
  console.log(c);
  //output ==> 2
}

console.log(c); //output ==> 2
