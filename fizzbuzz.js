//Write a function to print the numbers from 1 to n in the console such that the number multiples of 3
// should print fizz and the number multiples of 5 should print buzz and number which is both multipled by 3 and 5 
//should print fizzbuzz

function fizzbuzz(n){
    for (let i = 1; i<=n; i++){
        if(i % 3 === 0 && i % 5 ===0){
            console.log('fizzbuzz');
        }else if(i % 3 === 0){
            console.log('fizz');
        }else if(i % 5 === 0){
            console.log('buzz');
        }else{
            console.log(i);
        }
    }
}
fizzbuzz(20);
//Output
// 1
// 2
// fizz
// 4
// buzz
// fizz
// 7
// 8
// fizz
// buzz
// 11
// fizz
// 13
// 14
// fizzbuzz
// 16
// 17
// fizz
// 19
// buzz