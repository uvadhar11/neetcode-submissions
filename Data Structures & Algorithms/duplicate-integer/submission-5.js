class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // convert array to set
        let x = new Set(nums);
        // if size matches then there is no duplicate so return true.
        // we want to do a not because if they are not equal,
        // hasDuplicate should be true.
        return x.size !== nums.length;
    }
}
