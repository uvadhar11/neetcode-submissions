class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();

        for (let i = 0; i < nums.length; i++) {
            // NEED TO MOVE THE CHECK UP HERE, BECAUSE IF THE CHECK WAS AFTER ADDING TO HASHMAP,
            // A NUMBER + ITSELF = TARGET WOULD RETURN THE SAME INDEX TWICE, LIKE 
            // CURRENT ELEMENT = 5, TARGET = 10
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
