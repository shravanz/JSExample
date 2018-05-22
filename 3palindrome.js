//Write a function to check wheather given string is palindrome OR not
//Method 1 
function isPaliOrNot(str) {
    const reverse = str.split('').reverse().join('');
    if (reverse === str) {
        console.log('it is a palindrome');
    } else {
        console.log('it is not a palindrome');
    }
};
isPaliOrNot('abba');
//Output ==> it is a palindrome
isPaliOrNot('dabba');
//Output ==> it is not a palindrome