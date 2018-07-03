/* https://www.coderbyte.com/editor/guest:Letter%20Changes:JavaScript */
let letterChanges = (str) => {
    var vowels = ['e', 'i', 'o', 'u', 'E', 'I', 'O', 'U'];
    var arr = str.split('').map(eachLetter => {
        var cca = eachLetter.charCodeAt(0);
        var fcc = String.fromCharCode;
        if (cca >= 97 && cca <= 121) {
            if (vowels.indexOf(fcc(cca + 1)) !== -1) {
                return fcc(cca + 1).toUpperCase();
            } else { return fcc(cca + 1); }
        } else if (cca >= 65 && cca <= 89) {
            if (vowels.indexOf(fcc(cca + 1)) !== -1) {
                return fcc(cca + 1);
            } else { return fcc(cca + 1); }
        } else if (cca === 122 || cca === 90) {
            return 'A';
        } else {
            return eachLetter;
        }
    });
    return arr.join('');
};

console.log(letterChanges('hello*3'));
console.log(letterChanges('fun times!'));
console.log(letterChanges('this long cake@&'));