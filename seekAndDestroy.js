// SEEK & DESTROY
// Remove from the array whatever is in the following arguments, return the leftover
// values in the array
//ex. seekAndDestroy([2,3,4,6,6,'hello'],2,6) ==> [3,4,'hello']

//Method 1 --> arguments, indexOf , filter
function seekAndDestroy(arr) {
  const args = Array.from(arguments);
  // args ==> [ [ 2, 3, 4, 6, 6, 'hello' ], 2, 6 ]
  function filterArr(arr) {
    //Return true if Not in array
    return args.indexOf(arr) === -1;
  }
  return arr.filter(filterArr);
}
console.log(seekAndDestroy([2, 3, 4, 6, 6, "hello"], 2, 6));
// O/P --> [3,4,'hello']
console.log(seekAndDestroy([2, 3, 4, 6, 6, "hello"], 2, 6, "hello"));
// O/p --> [3,4]

//---------------------------------------------------------------------------------
// Method 2 ...rest, filter , includes
function seekAndDestroy2(arr, ...rest) {
  return arr.filter(val => !rest.includes(val));
}

console.log(seekAndDestroy2([2, 3, 4, 6, 6, "hello"], 2, 6));
// O/p --> [3,4]
