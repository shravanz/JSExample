//Write a function that returns the number of vowels used in a String i.e (a,e,i,o,u)
//Example vowels('HI There!') --> 3
//Example ('Why do you ask') --> 4
//Example ('why') --> 0

//======================Method 1=======================================
function vowels(str) {
    let count = 0;
    let checker = "aeiou"; // or we have give it as an array = ['a','e','i','o','u'] 
    for (let char of str.toLowerCase()) {
        if (checker.includes(char)) {
            count++
        }

    }
    return count;
}
console.log(vowels('Hi there!!'));//output --> 3
console.log(vowels('why do you ask for it!'));//output --> 6

//======================Method 2=======================================

function vowels2(str) {
    const matches = str.match(/[aeiou]/gi);//g is for continue the search and i is case-insensitive 
    return matches ? matches.length : 0;
}
console.log(vowels2('Hi there!!'));//output --> 3
console.log(vowels2('why!!'));//output --> 0

