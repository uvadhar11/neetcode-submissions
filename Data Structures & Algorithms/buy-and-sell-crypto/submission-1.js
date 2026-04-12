class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // BRUTE FORCE METHOD
        // let profit = 0;
        // for (let buy = 0; buy < prices.length - 1; buy++) {
        //     for (let sell = buy + 1; sell < prices.length; sell++) {
        //         profit = Math.max(profit, prices[sell] - prices[buy]);
        //     }
        // }
        // return profit;

        // 

        // SLIDING WINDOW
        // pointers
        let buy = 0; // left pointer is when you buy. You want to buy lower than you sell it for, so you want to shift pointers accordingly. 
        let sell = 1;
        let maxP = 0;

        while (sell < prices.length) {
            if (prices[buy] < prices[sell]) {
                let profit = prices[sell] - prices[buy];
                maxP = Math.max(maxP, profit);
            } else {
                buy = sell;
            }
            sell++;
        }
        return maxP;
    }
}
