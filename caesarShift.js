function caesarCipher(string, shift) {
    return string.split('').map(char => {
        if (char.match(/[a-z]/i)) { //matches any letter from a to z. thte i makes it case insensitive
            const code = char.charCodeAt(0); //gets he ASCII code of 'char' ASCII codes are numerical representations of characters.
            let shifted; //declare a variable called shifted which will later be used to stoore the ASCII code of the shifted character

            if ((code >= 65) && (code <= 90)) { //checks if uppercase
                shifted = ((code - 65 + shift) % 26 ) + 65;
            } else if ((code >= 97) && (code <= 122)) { // do the same check for lowercase letters
                shifted = ((code - 97 + shift) % 26) + 97;
            }

            return String.fromCharCode(shifted)
        }
        return char; //if char is not a letter, just return the original character
    }).join('') //after the map function has processed every character, .join('') combines back into a single string
}

module.exports = caesarCipher;
