// URL: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/

/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
function maxProfit(prices, fee) {
    const n = prices.length;
    const buy = new Array(n).fill(0);
    const sell = new Array(n).fill(0);

    buy[0] = -prices[0] - fee;  // Buying the stock on the first day

    for (let i = 1; i < n; i++) {
        // If we buy the stock on the ith day, we either skip the transaction if we already held the stock
        // on the previous day, or we sell the stock on the previous day and buy it on the ith day
        buy[i] = Math.max(buy[i - 1], sell[i - 1] - prices[i] - fee);
        
        // If we sell the stock on the ith day, we either skip the transaction if we didn't hold the stock
        // on the previous day, or we buy the stock on the previous day and sell it on the ith day
        sell[i] = Math.max(sell[i - 1], buy[i - 1] + prices[i]);
    }

    return sell[n - 1];
}