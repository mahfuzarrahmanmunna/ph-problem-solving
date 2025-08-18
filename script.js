// problem number 1
function reverseString(str) {
    let reversed = ""

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    return reversed;
}



// problem number 2
function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}


