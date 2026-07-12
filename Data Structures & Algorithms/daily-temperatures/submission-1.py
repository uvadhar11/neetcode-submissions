class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        # temperatures = [73, 74, 72, 71]
        # output = [1, 0, 0, 0]
        # optimization: monotonic stack pattern
        stack = []
        # initalize output with set values, mot using append
        res = [0 for _ in range(len(temperatures))] # value for _ in range(n)
        # OR: [0] * len(temperatures) - for primitives only, objects same reference
        for i, v in enumerate(temperatures):
            # check: is the current temp greater than top of stack? (which
            # is going to be the coldest because it won't propagate)
            # whole stack not empty as well
            while stack and v > temperatures[stack[-1]]:
                # pop colder temperature
                popped_index = stack.pop()

                # calculate difference and add to res array
                # we calculated the diff for the popped index element
                res[popped_index] = i - popped_index

                # continue checking the stack
            
            # now, there's no other colder temps at the top of stack
            # (we have found a warmer one), so add current temp index
            # to stack
            stack.append(i)
        
        return res