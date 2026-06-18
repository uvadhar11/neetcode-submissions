class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        prevMap = {} # val: index, store current number in map, more intuitive than complement
        for i, num in enumerate(nums):
            difference = target - num
            if difference in prevMap:
                return [prevMap[difference], i]

            # else, store difference for future matches
            prevMap[num] = i
            
        return [-1, -1]