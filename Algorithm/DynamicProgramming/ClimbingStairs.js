//Leetcode problem no. 70

//https://leetcode.com/problems/climbing-stairs/description/

//This is also finding fibonnaci series number
 function climbStairs (n, memo = {}) {
  if (n <= 2) return n;
  if (memo[n]) return memo[n];

  memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
  return memo[n];
};

console.log(climbStairs(5));