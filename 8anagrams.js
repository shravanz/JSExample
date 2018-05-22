//Anagrams of two string
//Examaple anagrams('rail safety','fairy tales) --> true
//Examaple anagrams('RAIL SAFRTY!','fairy tales) --> true
//Example Examaple anagrams('hi there','bye there) --> false

// //===================Method 1===========================================
// function anagram(stringA, stringB) {
//     const aCharMap = buildCharMap(stringA);
//     const bCharMap = buildCharMap(stringB);
//     if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//          console.log('false');
//     }
//     for (let char in aCharMap) {
//         if (aCharMap[char] !== bCharMap[char]) {
//              console.log('false');
//         }
//          console.log('true');
//     }
// }
// function buildCharMap(str) {
//     const charMap = {};
//     for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }
//     return charMap;
// }
// console.log(anagram('shravn','navarhs'));

//============================Method 2=======================================
function anagram(stringA,stringB){

   if(cleanString(stringA) === cleanString(stringB)){
       console.log('True');
   } else{
       console.log('false');
   }
}
anagram("shravan","navarhs"); // OutPut-->true
anagram("shravan","navards"); // OutPut-->false

//helper function 
function cleanString(str){
    return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
}