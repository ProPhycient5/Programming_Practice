//https://leetcode.com/problems/sliding-window-maximum/description/

function slidingWindowMax(nums, k){
    let res = [], deque = [];
    for (let i = 0; i<nums.length; i++){
      //removing the element not within the window
      if(deque.length>0 && deque[0] <= i-k){
        deque.shift();
      }
  
      //removing the elements smaller than current element from the back of deque
      while(deque.length > 0 && nums[deque[deque.length-1]] < nums[i]){
        deque.pop()
      }
  
      //adding the current index
      deque.push(i);
  
      //add the current max to the result
      if(i >= k-1){
        res.push(nums[deque[0]])
      }
    }
  
    return res;
  }

//Time Complexity - O(n)
//Space Complexity - O(n)  