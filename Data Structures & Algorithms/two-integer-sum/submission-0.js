class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // edge cases
        if (nums.length <= 1) return -1;

        // brute force solution - nested for loops
        for (let i = 0; i < nums.length - 1; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] === target) return [i, j];
            }
        }
        return -1;
    }
}
