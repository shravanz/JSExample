// print Fibonacci series for the Nth Element
//===============MEthod 1 ==================================== 
function fibo(n){
    const result = [0,1];
    for(i=2;i<=n;i++){
        const a = result[i-1];
        const b = result[i-2];
            result.push(a+b);
           // console.log(a+b);
        }
        return result[n];
}

//console.log(fibo(7));
//==============Method 2 using recursion=======================================
function fibo1(N){
    if(N<2){
        return N;
    }
    return fibo(N-1)+fibo(N-2);
}
console.log(fibo1(7));
//====================memoization function to reduce time complexity=============

