from collections import Counter

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # bucket sort solution. make len(nums) empty array where
        # each index represents a frequency with an array of numbers
        # matching that frequency as the value
        buckets = [[] for _ in range(len(nums) + 1)]

        # determine counts with counter (could use loop method asw)
        freq_map = Counter(nums)

        # populate frequencies into an array
        for num, count in freq_map.items():
            buckets[count].append(num)

        # solution array
        # loop through freq buckets created with range backwards
        # add numbers until we have found k numbers
        res = []
        for count in range(len(buckets)-1, -1, -1):
            for num in buckets[count]:
                res.append(num)
                if len(res) == k:
                    return res