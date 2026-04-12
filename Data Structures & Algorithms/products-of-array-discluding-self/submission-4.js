class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // we could do one pass to determine the product
        // second pass multiplies product by 1/nums[i]
        // edge cases: if a 0 exists, then we could not include it in 
        // the product calculation but store a count of 0s so if there's
        // more than one zero we know, and if there's just one zero we know too
        // if there's one zero, everything except one val = 0. if there's 2 or more
        // than every product is 0
        // if current num is negative we would need to multiply
        // by a negative 1 to counterract its effect
        let product = 1;
        let zeroes = 0;
        let arr = [];
        for (let num of nums) {
            if (num == 0) {
                zeroes++;
                if (zeroes == 1) continue;
            }
            // if (zeroes == 1) continue; // so doesn't make product 0
            product *= num;
        }
        for (let num of nums) {
            if (zeroes >= 2) arr.push(0);
            else if (zeroes == 1) {
                if (num == 0) arr.push(product);
                else arr.push(0);
            }
            // no zeroes
            else {
                arr.push(product/num);
            }
        }
        return arr;
    }
    // Cases:
    // zeroes >= 2: entire array = 0
    // zeroes == 1:
        // if you are on the zero, then its the product
        // if you aren't on the zero, then its 0
    // zeroes == 0: 
        // push product/num
        // don't have to multiply by negative pone for num < 0
        // since divison is inverse of multiplication and it 
        // will undo what multiplication did.
}
