class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if nums == []:
            return 0
        s = set(nums) # [0,3,2,5,4,6,1]
        max_length = 1 # 
        for num in s:
            # find a local min which is start of the subsequence
            if num - 1 not in s:
                local_length = 1
                i = 1

                while num + i in s:
                    local_length += 1
                    max_length = max(local_length, max_length)
                    i += 1
        return max_length
                    