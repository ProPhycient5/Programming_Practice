//https://leetcode.com/problems/product-of-array-except-self/description/
//Example 1:
//Input: nums = [1,2,3,4]
//Output: [24,12,8,6]

//Example 2:
//Input: nums = [-1,1,0,-3,3]
//Output: [0,0,9,0,0]

const nums = [1,2,3,4]
//Output: [24,12,8,6];
//prefix: [1, 1, 2, 6];
//suffix: [ 24, 12, 4,1];
//result: prefix[] * suffix[]

function productExceptSelf(nums){
    let prefix = new Array(nums.length).fill(1);
    let suffix = new Array(nums.length).fill(1);
    
    //prefix array
    let preProduct = 1;
    for (let i = 1; i < nums.length; i++){
         preProduct = preProduct * nums[i - 1]; 
         prefix[i] = preProduct; 
    }
    
    let sufProduct = 1;
    for (let j = nums.length - 2; j >= 0; j--){
        sufProduct = sufProduct * nums [j + 1];
        suffix[j] = sufProduct;
    }
    
    for (let k = 0; k < nums.length; k++){
        prefix[k] = prefix[k] * suffix[k];
    }
    return prefix;
}
console.log(productExceptSelf([-1,1,0,-3,3]))

//Time Complexity - O(n)
//Space Complexity - O(1)