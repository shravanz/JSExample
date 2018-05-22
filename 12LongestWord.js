// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'
// SOLUTION 1 - Return a single longest word
// SOLUTION 2 - Return an array and include multiple words if they have the same length
// SOLUTION 3 - Only return an array if multiple words, otherwise return a string

function longestWord(sen) {
    //create a filter Array of the given sentence
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
    //console.log(wordArr);//Output -->[ 'hi', 'there', 'my', 'name', 'is', 'shravan' ]

    //sort By length
    const sorted = wordArr.sort(function (a, b) {
        return b.length - a.length;
    });
    //console.log(sorted);//Output -->['shravan', 'there', 'name', 'hi', 'my', 'is' ]

    //If multiple words has same length, put in array
    const longestWordArr = sorted.filter(function (word) {
        return word.length == sorted[0].length;
    });
    //check if more than  one array value
    if (longestWordArr.length === 1) {
        return longestWordArr[0];
    }
    else {
        return longestWordArr;
    }

}

const output = longestWord('Hi there srikant, my name is Shravan');
console.log(output);