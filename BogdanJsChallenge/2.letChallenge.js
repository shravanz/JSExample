// ==========================================================================================

// var i = 10;
// for (var i = 0; i < 5; i++) {
//   //some stuff
// }
// console.log(i);
// ouptput ==> 5

//====================== how to get output = 10 =============================================

var i = 10; //global varible
for (let i = 0; i < 5; i++) {
  // i is blocked scoped variable
  console.log(i); // output 0,1,2,3,4
}
console.log(i);
//output ==> 10
