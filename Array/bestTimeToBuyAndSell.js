//QuestionLink : https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

const  prices = [7,1,5,3,6,4];

function maxProfitFn(prices){
    let minProfit = Infinity;
    let maxProfix = 0;
    for (let i = 0; i < prices.length; i++){
        if (prices[i] < minProfit){
            minProfit = prices[i]
        }

        if (prices[i] - minProfit > maxProfit){
            maxProfit = prices[i] - minProfit;
        }
    }
    return maxProfit
}

maxProfitFn(prices)