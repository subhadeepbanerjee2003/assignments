/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  /*str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if (str1.length !== str2.length) return false;
  else {
    let a = false;
    for (let i = 0; i < str1.length; i++) {
      for (let j = 0; j < str2.length; j++) {
        if (str1[i] === str2[j]) {
          a = true;
          break;
        }
      }
    }
    return a;
  }*/
  // the above code is not working for all test cases because it is not checking the count of each character
  const sortedStr1 = str1.toLowerCase().split("").sort().join("");
  const sortedStr2 = str2.toLowerCase().split("").sort().join("");
  if (sortedStr1 === sortedStr2) {
    return true;
  } else {
    return false;
  }
}

module.exports = isAnagram;
