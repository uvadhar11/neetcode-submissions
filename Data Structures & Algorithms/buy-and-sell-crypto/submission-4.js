class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let leastPrice = prices[0]; // make sure to init to prices[0]
        // otherwise the max profit calcualation will be off since
        // originally leastprice will be 0, so itll always make profit
        for (let price of prices) {
            if (price < leastPrice) leastPrice = price;
            maxProfit = Math.max(maxProfit, price - leastPrice);
        }
        return maxProfit;
    }
    // think of this problem as the absolute so like you always buy
    // low and sell high. so you need an absolute low value
    // and then each iteration check if u sell it now, will u get more
    // profit? since ur looping through the array u will check all 
    // elements at the least price if they are the true absolute min 
    // value that isn't the very last element.
}
