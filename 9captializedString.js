//Function that accept string captialised the first character 
//Example captailised('a last song')--> 'A Last Song'
//Example captailised('queen is real')--> 'Queen Is Real'

//======================Method 1====================================
function captialised(str){
    const words = [];
    for (let word of str.split(' ')){
        words.push(word[0].toUpperCase() + word.slice(1))
    }
    return words.join(' ');

}
console.log(captialised('a last song'));//output --> A Last Song
console.log(captialised('Quenn is real'));//output --> Queen Is Real

//========================Method 2======================================

function captailised(str){
    let result = str[0].toUpperCase();

    for (let i =1; i<str.length; i++){
        if( str[i-1] === ' '){
             result += str[i].toUpperCase();
        }else{
            result += str[i];
        }
    }
    return result;
}
console.log(captailised('a last song'));//output --> A Last Song
console.log(captailised('Quenn is real'));//output --> Queen Is Real
console.log(captailised('ALL HAIL the King'));//output --> ALL HAIL The King

