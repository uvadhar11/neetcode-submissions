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

        // attempt at optimization -> O(n^2) because indexOf needs to look through every element
        // so, we because 2 seperate loops are still O(n) with it being n + n, we can put it in
        // a hashmap
        // for (let i = 0; i < nums.length; i++) {
        //     let result = target - nums[i];
        //     let index = nums.indexOf(result);
        //     if (index !== -1 && index !== i) return [i, index];
        // }

        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if (map.has(nums[i])) {
                return [map.get(nums[i]), i];
            }

            map.set(diff, i);
        }

        return [];
    
    }
}
