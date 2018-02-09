//Write a function to calculate the factorial of the number

//=================================Method 1===================================================================================
function factorial(N) {
    if (N === 0) {
        return 1;
    }
    return N * factorial(N - 1);
}

console.log(factorial(3));//output --> 6
console.log(factorial(10));//output --> 3628800
console.log(factorial(100));//output --> 9.33262154439441e+157
