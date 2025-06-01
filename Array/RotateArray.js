//https://leetcode.com/problems/rotate-array/

var rotate = function(nums, k) {
  k = k % nums.length; 
  if (k === 0) return; 
  let shiftedStartIndex = nums.length - k;
  let end = nums.splice(shiftedStartIndex);
  nums.splice(0, 0, ...end);
  return nums;
};

//Time Complexity - O(n)
//Space Complexity - O(k)