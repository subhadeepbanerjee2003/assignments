/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase(); // Convert the string to lowercase

  str = str.replace(/[^a-z0-9]/g, ""); // Remove non-alphanumeric characters

  // str = str.replace(/[^a-z0-9]/g, ""); is a regular expression that matches anything that is not (^) a lowercase letter (a-z) or a digit (0-9) and replaces it with an empty string ("")
  // we can use regex.com to test regular expressions

  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
