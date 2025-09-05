// problem number 1
function reverseString(str) {
  let reversed = "";
  let forkTestNaimur = "This line is for fork test to create conflict";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
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

// problem no -7
function findEvenNumbers(arr) {
  const evenNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    }
  }
  return evenNumbers;
}

// problem no -8
function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// problem no -9
function factorial(n) {
  if (n < 0) return "Invalid input";
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// problem no -10
function pingPong() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    } else if (i % 3 === 0) {
      console.log("Ping");
    } else if (i % 5 === 0) {
      console.log("Pong");
    } else {
      console.log(i);
    }
  }
}

// // Example usage
// console.log(reverseString("hello"));
// console.log(countVowels("programming"));

// console.log(isPalindrome("madam"));
// console.log(isPalindrome("hello"));
// console.log(findMax([5, 1, 9, 3]));
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4]))
// console.log(findEvenNumbers([1, 2, 3, 4, 5, 6]));

// pingPong();
function forkTest() {
  console.log(`This is Fork test 1 from Naimur Rahman.`);
  console.log(`This is Fork test 2 from Naimur Rahman.`);
}
