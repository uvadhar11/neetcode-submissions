class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();

        for (let i = 0; i < nums.length; i++) {
            if (map.has(nums[i])) {
                // if the current number is in the map, you found the matching pair
                return [map.get(nums[i]), i];
            }

            let difference = target - nums[i];
            map.set(difference, i); // difference, index of other paired value

            // if (map.has(nums[i])) {
            //     // if the current number is in the map, you found the matching pair
            //     return [map.get(nums[i]), i];
            // }
        }
    }
}
