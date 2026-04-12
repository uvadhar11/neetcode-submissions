class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length == 0) return 0;

        let set = new Set(nums);
        let longest = 1;

        // 2, 4,3,4,5
        // 2, 3, 4, 5

        for (let i = 0; i < nums.length; i++) {
            let local = 1;
            let num = nums[i] + 1;
            while (set.has(num)) {
                local++;
                if (local > longest) longest = local;
                num++;
            }
        }

        return longest;
    }
}

// 2 3 4