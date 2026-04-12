class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        // range: [0, nums.length]
        // O(n) TC, O(n) SC solution:
        /*
        let s = new Set(nums);
        for (let i = 0; i <= nums.length; i++) { // imp: the range is to n INCLUSIVE
            if (!s.has(i)) return i;
        }
        */
        
        // optimal:
        // XOR is used when you want to find a missing element or one is the odd one out
        // are the numbers supposed to be paired or complete
        // if you are trying to get rid of extra space with bitwise
        let expected = 0;
        let actual = 0;
        for (let i = 0; i <= nums.length; i++) { // imp: the range is to n INCLUSIVE
            expected ^= i;
        }
        for (let num of nums) {
            actual ^= num;
        }
        return expected ^ actual;
        /*
            expected = 0 ^ 1 ^ 2 = 3
            actual = 0 ^ 2 = 2
            result = 3 ^ 2 = 1 ✅
        */
    }
}
