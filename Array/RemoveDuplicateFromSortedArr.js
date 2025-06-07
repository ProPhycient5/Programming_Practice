//https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

function removeDuplicates (nums) {
  if (nums.length === 0) return 0;
  
   let i = 0;
   for (j = 1; j < nums.length; j++){
     if (nums[j] !== nums[i]){
       i++;
       nums[i] = nums[j];
     }
   }
   return i+1;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))