// EVEN & ODD SUMS
//Take in an array and return an array of the Sums of even and odd numbers
// ex. evenOddSum([50,60,60,45,71]) == [170,116]

function evenOddSum(arr) {
  let evenSum = 0;
  let oddSum = 0;
  arr.forEach(num => (num % 2 === 0 ? (evenSum += num) : (oddSum += num)));
  return [evenSum, oddSum];
}
console.log(evenOddSum([50, 60, 60, 45, 71]));
// Ouput --> [170,116]
