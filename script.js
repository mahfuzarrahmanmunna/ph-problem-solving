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


// problem number 3
function isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

// problem no 4
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function removeDuplicates(arr) {
    const unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (!unique.includes(arr[i])) {
            unique.push(arr[i]);
        }
    }
    return unique;
}

//  problem no -6
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}


// Example usage
console.log(reverseString("hello"));
console.log(countVowels("programming"));

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
console.log(findMax([5, 1, 9, 3]));
console.log(removeDuplicates([1, 2, 2, 3, 4, 4]))
