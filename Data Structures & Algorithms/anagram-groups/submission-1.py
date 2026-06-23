class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        patterns = {}
        pairs = []
        # so diffeent groups of words for combinations. so we need a
        # global array for the solution. and then for each word we need
        # to determine the pattern for it
        # so im thinking we do a for loop, for each calculate pattern
        # and then go and throw stuff into the map

        # loop thru all words
        for word in strs:
            # determine pattern for each word. array, convert to tuple and use it as a key for hashmap
            # all lowercase letters
            pattern = [0] * 26
            for letter in word:
                index = ord(letter) - ord("a")
                pattern[index] += 1
            # convert to tuple and use as a key
            key = tuple(pattern)
            if key not in patterns:
                patterns[key] = []
            patterns.get(key).append(word)
        
        # return
        return list(patterns.values())