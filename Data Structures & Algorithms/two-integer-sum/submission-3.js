class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // brute force
        // for (let i = 0; i < nums.length; i++) {
        //     for (let j = i + 1; j < nums.length; j++) {
        //         if (nums[i] + nums[j] === target) return [i, j];
        //     }
        // }

        // attempt at optimization
        for (let i = 0; i < nums.length; i++) {
            let result = target - nums[i];
            let index = nums.indexOf(result);
            if (index !== -1 && index !== i) return [i, index];
        }
    }
}
