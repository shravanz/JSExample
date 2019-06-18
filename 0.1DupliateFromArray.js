//Before Moving ahead First challenge is how to duplicate a whole array
const array1 = [1, 2, 3, 4, 5];
console.log(array1); // [1,2,3,4,5]
// Lets try with assigment operator
const array2 = array1;
console.log(array2); // [1,2,3,4,5]

array2.push(6);
// Using Assigment operator we cannot make seperate clone of array1
console.log("Array1 " + array1); // [1,2,3,4,5,6]
//-------------------------------------------------------------------------------------------------------------
// Method 1 Using Spread operator
const arr = [9, 8, 7, 6];
const arr2 = [...arr];
console.log(arr2); // [9,8,7,6]
arr2.push(1); // if we change arr2 value
console.log(arr); // arr wont be effected [9,8,7,6] we made a seperate clone/copy of array

// Method 2 Slice Operator
const arr3 = arr.slice();

// Method 3 Concat
const arr4 = [].concat(arr);

// Method 4 Array.from()
const arr5 = Array.from(arr);

// Method 5 For loop
function arr5(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; ++i) {
    newArr[i] = arr[i];
  }
  return arr;
}
