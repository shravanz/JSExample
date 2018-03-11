//Fibonacci series 
function fibo(n){
    const result = [0,1];
    for(i=2;i<=n;i++){
        const a = result[i-1];
        const b = result[i-2];
            result.push(a+b);
            console.log(a+b);
        }
        return result[n];
}

console.log(fibo(7));