class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // let buy = 0;
        // let sell = 1;
        let profit = 0;

        for (let buy = 0; buy < prices.length - 1; buy++) {
            for (let sell = buy + 1; sell < prices.length; sell++) {
                profit = Math.max(profit, prices[sell] - prices[buy]);
            }
        }
        
        return profit;
    }
}
