class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        // XOR
        let num = nums[0];
        for (let i = 1; i < nums.length; i++) {
            num ^= nums[i];
        }
        return num;
    }
}
