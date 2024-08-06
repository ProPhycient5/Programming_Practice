// Use split(" ") method to destructure the strings/sentence into an array of words.
// Then implement a loop in backward direcction and push each word into an new array.
// Also check whether each iterated item is an valid string or not.

var reverseWords = function(s) {
    const strArr = s.split(" ");
    const reversedArr = [];
    for (let i = strArr.length - 1 ; i >=0 ; i--){
        if(strArr[i])
        reversedArr.push(strArr[i]);
    }
    return reversedArr.join(" ").trim();
};

//Time and Space Complexity - O(n) 