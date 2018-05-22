//Write a Function to Reverse String 

//Method 1 using split(),Reverse(),join()
function ReverseMyString(str) {
    return str.split('').reverse().join('');
};


//Method 2 using traditional Forloop
function ReverseMyString(str) {
    let reversed = '';
    for (let char of str) {
        reversed = char + reversed
    };
    return reversed;
};

//Method 3 using array reduce method
function ReverseMyString(str) {
    return str.split('').reduce(function (char, rev) {
        return rev + char;
    }, '');
};

console.log(ReverseMyString('shravan'));
//Output ==>   navarhs