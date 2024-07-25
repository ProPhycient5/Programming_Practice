//https://leetcode.com/problems/maximum-subarray/description/
const nums = [-2,1,-3,4,-1,2,1,-5,4] //Input:
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

function maxSubArray(nums){
    let sum = 0, maxNum = nums[0];
    let startIndex = 0, endIndex = 0;

    for (let i = 0; i < nums.length; i++){
        sum = sum + nums[i];
        if (sum > maxNum){
            maxNum = sum;
            lastIndex = i;     
        }
        if (sum < 0 ){
            sum = 0;
            startIndex = i + 1;
        }
    }
   return {sum, subarray: nums.slice(startIndex, lastIndex + 1)};
}

//Time Complexity - O(n)
//Space Complexity - O(1)