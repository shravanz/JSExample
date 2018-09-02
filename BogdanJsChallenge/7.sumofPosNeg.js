// Sum of Positive  and Negative Number
// Create a function sumPlusMinus() that takes array and Sums separately posotive and negative number .
// function should return { plus :74 minus : -54} for array = [10,-12,30,-1,-8,0,14,-33,20]
var nums = [10, -12, 30, -1, -8, 0, 14, -33, 20];

function sumPlusMinus(arr) {
  return arr.reduce(
    (acc, elem) => {
      return {
        plus: elem > 0 ? acc.plus + elem : acc.plus,
        minus: elem < 0 ? acc.minus + elem : acc.minus
      };
    },
    { plus: 0, minus: 0 }
  );
}

console.log(sumPlusMinus(nums));
//Output --> { plus: 74, minus: -54 }
