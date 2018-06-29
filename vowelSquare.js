/* https://coderbyte.com/editor/guest:Vowel%20Square:JavaScript */

let vowelSquare = strArr => {
    var vowels = 'aeiou';
    var matrixArr = strArr.map(eachArr => eachArr.split(''));
    for (var i = 0; i < strArr.length; i++) {
        for (var j = 0; j < strArr[i].length; j++) {
            if ((vowels.indexOf(strArr[i][j]) !== -1) && (j + 1 < strArr[i].length) && (vowels.indexOf(strArr[i][j + 1]) !== -1) &&
                (i + 1 < strArr.length) && (vowels.indexOf(strArr[i + 1][j]) !== -1) && (vowels.indexOf(strArr[i + 1][j + 1]) !== -1)) {
                return `${i}-${j}`;
            }
        }
    }
    return 'not found';
};

console.log(vowelSquare(['abcd', 'eikr', 'oufj']));
console.log(vowelSquare(['aqrst', 'ukaei', 'ffooo']));
console.log(vowelSquare(['aeea', 'eiou', 'oude']));
console.log(vowelSquare(['gg', 'ff']));
console.log(vowelSquare(['one', 'two', 'three']));