//leetcode problem no. 121
//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
const arr = [7,6,4,3,1]

function maxProfit(prices){
  if (prices.length <= 1){
    return 0
  }
 
 let profit = 0;
 let small = prices[0];
 
 for (let i = 1; i < prices.length; i++){
   if(prices[i] < small){
     small = prices[i]
   } else{
     profit = Math.max(prices[i] - small, profit);
   }
   
 }
 
 return profit;
}

console.log(maxProfit(arr))