class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let set = new Set();
        for (const x of nums) {
            if (set.has(x)) return true;
            set.add(x);
        }
        return false;
    }
}
