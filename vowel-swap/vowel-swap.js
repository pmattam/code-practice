function vowelSwap(text) {
    let splitArray = text.split('');
    var arr = splitArray.map(eachLetter => {
        if (eachLetter === 'a') {
            return eachLetter.replace('a', 'o');
        } else if (eachLetter === 'A') {
            return eachLetter.replace('A', 'O');
        } else if (eachLetter === 'e') {
            return eachLetter.replace('e', 'a');
        } else if (eachLetter === 'E') {
            return eachLetter.replace('E', 'A');
        } else if (eachLetter === 'i') {
            return eachLetter.replace('i', 'u');
        } else if (eachLetter === 'I') {
            return eachLetter.replace('I', 'U');
        } else if (eachLetter === 'o') {
            return eachLetter.replace('o', 'i');
        } else if (eachLetter === 'O') {
            return eachLetter.replace('O', 'I');
        } else if (eachLetter === 'u') {
            return eachLetter.replace('u', 'e');
        } else if (eachLetter === 'U') {
            return eachLetter.replace('U', 'E');
        } else return eachLetter;
    });
    return arr.join('');
};

module.exports = vowelSwap;