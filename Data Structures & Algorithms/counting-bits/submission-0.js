class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        // we can do the count for each number
        // most optimal is using dp memoization
        // brute force:
        /*
        let output = [];
        for (let i = 0; i <= n; i++) {
            let count = 0;
            let copy = i;
            while (copy > 0) {
                copy &= (copy - 1);
                count++;
            }
            output.push(count);
        }
        return output;
        */

        // dp (most optimal):
        let dp = new Array(n + 1).fill(0); // array of length n+1 so we include index n
        // fill with 0s so index 0 is already good, and to avoid issues.
        for (let i = 1; i <= n; i++) {
            dp[i] = dp[i >> 1] + (i & 1); // i&1 -> least significant bit
            // i >> 1 let's us divide by 2 to get the number w/o its least sig bit
        }
        return dp;
        //bits[1] = bits[0] + 1 bits[1] = 0 + 1 
        // bits[2] = bits[1] + 0 = 1 
        // bits[3] = bits[1] + 1 = 2

    }
}
