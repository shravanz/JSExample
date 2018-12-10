// MISSING LETTERS
//Find the Missing letter in the passed letter range and return it. If All letters
//are Present , return undefined
//ex. missingLetters('abce') == 'd';
//    missingLetters('abcdefghjklmno') == 'i'
//    missingLetters('abcdefghijklmnopqrstuvwxyz') == undefined

function missingLetters(str) {
  let compare = str.charCodeAt(0);
  // charCodeAt return the ascii value and the parameter is charset
  // i.e 0 means first character set
  //console.log(compare); // returns 97 which ascii value of a
  let missing;
  //let now split string to array using split method
  str.split("").map((char, i) => {
    if (str.charCodeAt(i) === compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare); // return back from ascii to string
    }
  });
  return missing;
}
console.log(missingLetters("abcd")); // undefined
console.log(missingLetters("abcefg")); //d
console.log(missingLetters("abcdg")); // d e
