//Write a function to balance the parenthesis 
//Example match("(())");---> true
//Example match("(())()(");---> false
////Example match(")(");---> false
//================================METHOD 1=========================================================================
function match(str) {
    let count = 0;
    let splitStr = str.split('');
    // console.log(splitStr);
    for (let char of str) {
        if (char === '(') {
            count++;
        }
        else if (char === ')') {
            count--;
        }
        else {
            count = 0;
        }

    }
    if (count === 0) {
        console.log('balanced');
    }
    else {
        console.log('unbalanced');
    }
}
match("))");//Output-->unbalanced
//================================METHOD 2 =========================================================================
function balanceparens(string) {
    return !string.split('').reduce(function (previous, char) {
        if (previous < 0) { return previous; } //for--> ")(" condition
        if (char === '(') { return ++previous; }
        if (char === ')') { return --previous; }
        return previous;
    }, 0)
}
;
console.log(balanceparens('(())'));//OUTPUT --> true
console.log(balanceparens('(()))))))'));//OUTPUT --> false
console.log(balanceparens(')('));//OUTPUT --> false

