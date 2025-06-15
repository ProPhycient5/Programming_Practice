//### Write a code in JS to check for whether two strings are anagram or not.
// An anagram of a string is another string that contains the same characters, only the order of characters can be different.


function isAnagram(string1, string2) {
  if (string1.length !== string2.length) return false;
  if (string1.trim().toLowerCase()) {
    const str1 = string1.trim().toLowerCase().split("").sort().join("");
    const str2 = string2.trim().toLowerCase().split("").sort().join("");
    return str1 === str2;
  }
}

