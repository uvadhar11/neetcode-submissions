class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        # can use a set and sliding window for each section. 
        # set is useful since no duplicates, don't need to worry about
        # key, value pairs and can just compare length. 

        length = 0
        
        # loop
        for left in range(len(s)):
            no_duplicate_set = set() # z, 
            no_duplicate_set.add(s[left]) # add first element in window
            right = left # l: 0, r: 1
            while len(no_duplicate_set) == (right - left + 1): # 0 == 0
                # increment right pointer
                right += 1

                # check out of bounds
                if right >= len(s):
                    break

                # add new value, need to add at the end
                no_duplicate_set.add(s[right]) # x
            # calculate new length and if it is greater than current max
            substringLength = right - left # right because right is 1 index after the window
            if substringLength > length:
                length = substringLength

        return length        