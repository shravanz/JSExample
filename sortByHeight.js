// SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them
// which cannot be moved. Your task is to arrange the people by their heights
// in a non-descending order without moving the trees.
// ex. a = [-1,150,190,170,-1,-1,160,180]
// sortByHeight(a) == [-1,150,160,170,-1,-1,180,190]

function sortByHeight(a) {
  const arr1 = []; // to hold tree position which is -1 by the way😁
  const arr2 = []; // to hold the position of values to be sorted
  a.forEach((value, index) => {
    if (value === -1) {
      arr1.push(index);
    } else {
      arr2.push(value);
    }
  });
  //console.log(arr1); // [0,4,5]
  //console.log(arr2); // [150,190,170,160,180]

  const sortArr = arr2.sort((a, b) => a - b);
  arr1.forEach((value, index) => sortArr.splice(arr1[index], 0, -1));
  return sortArr;
}
const a = [-1, 150, 190, 170, -1, -1, 160, 180];
console.log(sortByHeight(a));
// O/p --> [-1,150,160,170,-1,-1,180,190]
