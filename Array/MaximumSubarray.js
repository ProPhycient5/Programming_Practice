//https://leetcode.com/problems/maximum-subarray/description/
const nums = [-2,1,-3,4,-1,2,1,-5,4] //Input:
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

function maxSubArray2(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];

  let startIdx = 0;
  let tempStart = 0;
  let endIdx = 0;

  for (let i = 1; i < nums.length; i++) {
    if (currentSum < 0) {
      currentSum = nums[i];
      tempStart = i;
    } else {
      currentSum += nums[i];
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
      startIdx = tempStart;
      endIdx = i;
    }
  }

  return { maxSum, subArray: nums.slice(startIdx, endIdx + 1) };
}


console.log(maxSubArray2([5,4,-1,7,8]))

// The above code handles all test cases, if all the array contains -ve numbers.
//[-3, -2, -1] → maxSum: -1, subarray: [-1] 

//Time Complexity - O(n)
//Space Complexity - O(1)