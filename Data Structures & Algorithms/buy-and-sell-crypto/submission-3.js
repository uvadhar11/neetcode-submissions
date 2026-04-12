class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let leastPrice = prices[0];
        for (let price of prices) {
            if (price < leastPrice) leastPrice = price;
            maxProfit = Math.max(maxProfit, price - leastPrice);
        }
        return maxProfit;
    }
}
