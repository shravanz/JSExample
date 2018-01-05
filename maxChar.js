//Write a Function to find the most repeated character in the string
function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';
    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }
    console.log(charMap);// output { H: 1, e: 3, l: 2, o: 1, ' ': 1, T: 1, h: 1, r: 1, '!': 1 }
    for (let i in charMap) {
        //this "for in" loop will iterate through the object 'key'; so  value of i = H,e and soon 
        if (charMap[i] > max) {
            max = charMap[i];
            maxChar = i;

        }
        else {
            return maxChar;
        }

    }

}

console.log(maxChar('Hello There!'));//output ==> e