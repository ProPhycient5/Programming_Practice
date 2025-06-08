//https://leetcode.com/problems/two-sum/description/

function twoSum(nums, target){
  let obj = {};
  for (let i = 0; i < nums.length; i++){
    let compliment = target - nums[i];
    if(compliment in obj){
      return [obj[compliment], i]
    }
    obj[nums[i]] = i;
  }
}

console.log(twoSum([2,7,11,15]))