// Remove Duplicates from an Array
//===========================Method 1 Using forEach loop=======================================================
const name1 = ["John", "Paul", "George", "Ringo", "John"];
function removeDups(array) {
  let unique = {};
  array.forEach(function(i) {
    if (!unique[i]) {
      unique[i] = true;
    }
  });
  return Object.keys(unique);
}
console.log(removeDups(name1)); // [ 'John', 'Paul', 'George', 'Ringo' ]

//=============================Method 2 using set operator======================================================
const name2 = ["John", "Paul", "George", "Ringo", "John"];

let unique = [...new Set(name2)];
console.log(unique); //["John", "Paul", "George", "Ringo"];

//===============================Mehtod 3 using array filter====================================================
const name3 = ["John", "Paul", "George", "Ringo", "John"];

let x = array => array.filter((v, i) => name3.indexOf(v) === i);
console.log(x(name3)); //[ 'John', 'Paul', 'George', 'Ringo' ]
