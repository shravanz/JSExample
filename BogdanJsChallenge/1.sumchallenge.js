//Write a function sum() that will sum all arguments passed to it. Quantity of the arguments is unknown
//Example
//sum(1,3)==> 4
//sum(10,20,5) ==> 35
//sum(2,5,1,2,80,10) ==> 100
//=========================================================================================================

//we can acheive this using rest operator ex(...args) which is  convert to an array,after we get array of argument we have
//sum the array element which is done by reduce method

function sum(...args) {
  //console.log("args", args); // args [1,3]
  var total = args.reduce((acc, elem) => acc + elem, 0);
  console.log(total);
}
sum(1, 3); // 4
sum(10, 20, 5); //35
