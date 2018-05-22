//write a Function to reverse integer value
//Method  1 
function ReverseInt(int) {
    return parseInt(int.toString().split('').reverse().join('')) * Math.sign(int);
};

console.log(ReverseInt(123));//output ==> 321
console.log(ReverseInt(-1234000));//output ==> -4321
console.log(ReverseInt(500));//output ==> 5