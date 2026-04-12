class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        // XOR
        let acc = 0; // XOR 0 with a number is fine since it returns the number back
        for (let num of nums) {
            acc ^= num;
        }
        return acc;
    }
}
