class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let s = new Set(nums);
        return s.size != nums.length;
    }
}
