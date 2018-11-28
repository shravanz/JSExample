// SUM ALL PRIME
// Pass in a number to loop up to and add all of the prime numbers. A Prime number
// is whole Number greater than 1 whose only factors are 1 and itself
//ex. sumAllPrime(10) == 17 i.e prime from 0 to 10 are 2,3,5,7

function sumAllPrime(num) {
  let total = 0;

  function checkForPrime(i) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        return false;
      }
    }
    return true;
  }
  for (let i = 2; i <= num; i++) {
    if (checkForPrime(i)) {
      total += i;
    }
  }
  return total;
}

console.log(sumAllPrime(10));
//O/P --> 17
