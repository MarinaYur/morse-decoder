const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    // console.log(MORSE_TABLE);
    let phrase = expr.split("**********");
    let word = [];
    let letters = [];
    let words = [];
    let a = [];
    let letterMorse = [];
    let resultString = "";

    for (let i = 0; i < phrase.length; i++) {
        phrase[i] += " ";
        word = phrase[i].match(/[\s\S]{1,10}/g) || [];
        letters = letters.concat(word);
    };

    for (let index = 0; index < letters.length; index++) {
        a = letters[index].match(/[\s\S]{1,2}/g) || [];
        for (let indexA = 0; indexA < a.length; indexA++) {
            switch (a[indexA]) {
                case "00":
                    a[indexA] = "";
                    break;
                case "10":
                    a[indexA] = ".";
                    break;
                case "11":
                    a[indexA] = "-";
                    break;
            }
        }
        let oneLetterMorse = a.join("");
        letterMorse.push(oneLetterMorse);
    }

    for (let indexLetter = 0; indexLetter < letterMorse.length - 1; indexLetter++) {
        if (MORSE_TABLE[letterMorse[indexLetter]] === undefined) {
            resultString += " ";
        } else {
            resultString += MORSE_TABLE[letterMorse[indexLetter]];
        }
    }
    return resultString;
}

module.exports = {

    decode
}