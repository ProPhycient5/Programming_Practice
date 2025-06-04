//https://www.naukri.com/code360/problems/second-largest-element-in-the-array_873375

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]


function secondLargest(arr) {
    let sortedArr = arr.sort((a, b) => b - a);
    const uniqueArr =  [...new Set(sortedArr)];
    return uniqueArr.length >= 2 ? uniqueArr[1] : -1;
}

console.log(secondLargest([ -12, 14, -15, -17, 20]))