// URL: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;
  
  for (let i = 1; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    const profit = prices[i] - minPrice;
    maxProfit = Math.max(maxProfit, profit);
  }
  
  return maxProfit;
}
