function newNumeralSystem(number) {
    let lettersNumbers = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H", 
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "X",
        "W",
        "Y",
        "Z"
    ];

    let valueLetter = lettersNumbers.indexOf(number);
    let resp= [];
    
    console.log(valueLetter);
    for (const alma in lettersNumbers) {
        for(const gemea in lettersNumbers) {
            if(parseInt(alma) + parseInt(gemea) === valueLetter && resp.indexOf(lettersNumbers[gemea] + " + " + lettersNumbers[alma]) == -1){
                resp.push(lettersNumbers[alma] + " + " + lettersNumbers[gemea]);
                console.log(alma + " + " + gemea);
                continue
            } 
        }
    }
    
    return resp;
}

let resp = newNumeralSystem('W');
console.log(resp);

/**
 * let lettersNumbers = {
        "A": 0,
        "B": 1,
        "C": 2,
        "D": 3,
        "E": 4,
        "F": 5,
        "G": 6,
        "H": 7, 
        "I": 8,
        "J": 9,
        "K": 10,
        "L": 11,
        "M": 12,
        "N": 13,
        "O": 14,
        "P": 15,
        "Q": 16,
        "R": 17,
        "S": 18,
        "T": 19,
        "U": 20,
        "V": 21,
        "X": 22,
        "W": 23,
        "Y": 24,
        "Z": 25
    };
 */
