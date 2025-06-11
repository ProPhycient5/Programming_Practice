//https://leetcode.com/problems/container-with-most-water/description/
//Two pointer problem

function maxArea(height) {
  let maxA = 0;
  let left = 0; right = height.length - 1;
  for (; left < right; ){
   const width = right - left;
   const h = Math.min(height[left], height[right]);
   const area = h * width;
   maxA = Math.max(maxA, area)

   if(height[left] < height[right])
    left++
    else right--;
  }
  return maxA; 
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))