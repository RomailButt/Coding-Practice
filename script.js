// reverse a string
function reverse(str) {
  return str.split("").reverse().join("");
}
// console.log(reverse("romail"));

// Check for Palindrome
function checkPalindrome(str) {
  const isPalindrome = str.split("").reverse().join("");
  return isPalindrome === str ? "Palindrome" : "No Palindrome";
}

// console.log(checkPalindrome("madam"));

// Find the Largest Number in an Array
function LargestNumber(arr) {
  return Math.max(...arr);
}

// console.log(LargestNumber([1,2,3,4,5,7,8,12,4,54,23]));

// FizzBuzz 3 and 5

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

//   fizzBuzz(15);

// Find the Factorial of a Number
function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

// console.log(factorial(5));

// Count Vowels in a String

function countVowels(str) {
  let count = 0;
  str.split("").forEach((element) => {
    if (
      element === "a" ||
      element === "e" ||
      element === "i" ||
      element === "o" ||
      element === "u"
    ) {
      count++;
    }
  });
  return count;
}

// console.log(countVowels("aeiou"));

// Find Duplicates in an Array
function findDuplicates(arr) {
  const seen = new Set();
  const duplicate = new Set();

  arr.forEach((item) => {
    if (seen.has(item)) {
      duplicate.add(item);
    } else {
      seen.add(item);
    }
  });
  return [...duplicate];
}
// console.log(findDuplicates([1,2,4,5,7,8,5,3,2]));

// Merge Two Sorted Arrays

function mergeSortedArrays(arr1, arr2) {
  let merged = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  return merged.concat(arr1.slice(i)).concat(arr2.slice(j));
}

//   console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));

// Remove Duplicates from Sorted Array
function removeDuplicates(arr) {
  if (arr.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

let arr = [1, 1, 2, 3, 3, 4];
let newLength = removeDuplicates(arr);
//   console.log(arr.slice(0, newLength));

//  Find the Missing Number in an Array
function findMissingNumber(arr) {
  const n = arr.length;
  const totalSum = (n * (n + 1)) / 2;

  const arraySum = arr.reduce((sum, num) => sum + num, 0);

  return totalSum - arraySum;
}

// console.log(findMissingNumber([0,3,6,1,5,4]));

// one previous element if one element matches

function elementFinder(str) {
  const spliting = str.split("");
  for (let i = 0; i < spliting.length; i++) {
    for (let j = i + 1; j < spliting.length; j++) {
      if (spliting[j] === spliting[i]) {
        return spliting[j - 1];
      }
    }
  }
}
// console.log(elementFinder("discipline"));

// Replace All Spaces with Hyphens
function replaceSpaceAndHyphens(str) {
  return str.trim().split(" ").join("-");
}

// console.log(replaceSpaceAndHyphens("   Hello guys I am Nasir Khan Jaan    "));

// Check if a String is an Anagram

function isAnagram(str1, str2) {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

// console.log(isAnagram("listen","silent"));

// remove all the repeating values in a word

function removeRepeatingValues(str) {
  const isSet = new Set(str);
  return [...isSet].join("");
}

// console.log(removeRepeatingValues("4083286453258934532874"));

// Check if All Characters are Unique

function isUnique(str) {
  return new Set(str).size === str.length;
}

// console.log(isUnique("romail"));

// Capitalize the First Letter of Each Word
function capitalFirstWord(str) {
  return str
    .split(" ")
    .map((item, index) => {
      return item[0].toUpperCase() + item.slice(1);
    })
    .join(" ");
}
// console.log(capitalFirstWord("Hello guys I am Nasir Khan Jaan"));

// Find the Longest Word in a Sentence
function LongestWordInSentence(sentence) {
  let largestLength = 0;
  let largestWord = "";
  sentence
    .trim()
    .split(" ")
    .forEach((element, index) => {
      if (element.length > largestLength) {
        largestWord = element;
        largestLength = element.length;
      }
    });
  return largestWord;
}

// console.log(LongestWordInSentence("Hello guys I am Nasir Khan Jaan"));

// Find the second largest element in an array
function secondLargestElementInArray(arr) {
  let firstLargest = 0;
  let secondLargest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] < firstLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

// console.log(secondLargestElementInArray([1, 5, 88, 7, 9, 5, 4, 30, 2, 1, 3]));

// Count Each Character's Occurrences

function countOccurrences(str) {
  let object = {};
  for (let i = 0; i < str.length; i++) {
    object[str[i]] = (object[str[i]] || 0) + 1;
  }
  return object;
}

// console.log(countOccurrences("maaz"));

// Reverse Each Word in a Sentence
function reverseAllWords(sentence) {
  return sentence
    .split(" ")
    .map((item) => {
      return item.split("").reverse().join("");
    })
    .join(" ");
}

// console.log(reverseAllWords("Hello guys I am Nasir Khan Jaan"));

// Swaping 2 variable

function swapingVariable(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;
  return `${a} ${b}`;
}

// console.log(swapingVariable(10, 20));

// first letter capital
function lastLetterCapital(str) {
  return str[0].toUpperCase() + str.slice(1, str.length);
}
// console.log(lastLetterCapital("romail"));

// Check if a word present in a sentence

function isLetter(sentence, word) {
  return sentence.includes(word);
}
// console.log(isLetter("Hello guys I am nasir khan jaan", "K"));

// Convert a String to Camel Case
function toCamelCase(str) {
  let _index = "";
  return str
    .split("")
    .map((ele, index) => {
      if (ele === "_") {
        _index = index;
        return "";
      } else if (_index + 1 === index) {
        return str[index].toUpperCase();
      } else {
        return str[index];
      }
    })
    .join("");
}
// console.log(toCamelCase("hello_world_romail_rsds"));

// Find the first non repeat character
function firstNonRepeating(str) {
  for (let char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
  }
  return null;
}
// console.log(firstNonRepeating("maazm"));

// Check if a String Contains Only Digits
function isStringContainsOnlyDigits(str) {
  let count = 0;
  str.split("").forEach((ele) => {
    if (!Number(ele) && Number(ele) !== 0) {
      count++;
    }
  });
  if (count === 0) {
    return true;
  } else {
    return false;
  }
}

// console.log(isStringContainsOnlyDigits("1234506"));


function wordIntoSnakeCase(str) {
  return str.split(" ").map((ele) => {
    if (str.indexOf(ele) === 0) {
      return ele[0].toLowerCase() + ele.slice(1, ele.length);
    } else {
      return ele[0].toLowerCase() + ele.slice(1, ele.length);
    }
  }).join('_');
}
// console.log(wordIntoSnakeCase("Hello guys I am nasir"));
