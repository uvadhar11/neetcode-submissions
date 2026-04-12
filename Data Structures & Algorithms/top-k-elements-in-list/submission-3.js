class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        if (nums.length <= 1) return nums;

        let map = new Map();

        for (let num of nums) {
            if (map.has(num)) {
                map.set(num, map.get(num) + 1);
            }
            else {
                map.set(num, 1);
            }
        }

        let freqArray = Array.from(map.entries());
        freqArray.sort((a, b) => b[1] - a[1]);
        let result = freqArray.slice(0, k).map(pair => pair[0]);
        return result;
    }
}
