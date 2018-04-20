//============================METHOD-1=========================================
function bubblesort(array) {
  // 1 loop for array length for every iteration length is decrease
  // 2 loop for iterating through array
  for (var i = array.length; i > 0; i--) {
    for (var j = 0; j < i; j++) {
      // now we have two compare 2 number in array and switch them
      if (array[j] > array[j + 1]) {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

console.log(bubblesort([5, 4, 1, 8, 8, 6]));

//Output -->[ 1, 4, 5, 6, 8, 8 ]
