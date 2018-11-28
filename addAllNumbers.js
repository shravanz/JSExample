// Challenge 1 : ADD ALL Numbers
//Return a Sum of all parameters entered  regardless of the amount of numbers - No arrays
// ex. addAll(2,3,1) === 6

//method 1 - ES5 arguments and loops
function addAll() {
  //return arguments;
  //Output is
  //[Arguments] { '0': 2, '1': 3, '2': 1 }
  //Converting kinda of array to actual array in ES5
  var args = Array.prototype.slice.call(arguments);
  //return args;
  // O/P -->  [2,3,1]
  var total = 0;
  for (i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}
console.log(addAll(2, 3, 1)); // 6
//--------------------------------------------------------------------------------
//Method 2 using ES6  ...rest and reduce/foreach
function addAll2(...numbers) {
  //return rest; // O/P--> [2,5,6,7]
  let total = 0;
  numbers.forEach(num => (total += num));
  return total;
}

console.log(addAll2(2, 5, 6, 7));
20;
