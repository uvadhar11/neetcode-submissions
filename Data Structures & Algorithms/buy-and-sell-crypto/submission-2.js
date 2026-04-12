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

        // looping through all the elements in the prices array
        while (sell < prices.length) {
            // if the buy price is less than the sell price, that's good. 
            if (prices[buy] < prices[sell]) {
                // calculate profit (sell-buy)
                let profit = prices[sell] - prices[buy];
                // set max profit to which ever is greater - the max profit or the newly calculated profit
                maxP = Math.max(maxP, profit);
            } else {
                // if the buy price is greater than or equal to sell price, move the left pointer up
                buy = sell;
            }
            // then make sure to increment sell (right pointer to check if you get another sell value and if that's greater than or less than)
            sell++;
        }
        return maxP;
    }
}
