class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        # temperatures = [73, 74, 72, 71]
        # output = [1, 0, 0, 0]
        res = []
        # edge case of min size (1)
        if len(temperatures) == 1:
            return [0]
        
        for index in range(len(temperatures)):
            left = index
            if left == len(temperatures) - 1:
                res.append(0)
                return res
            right = left + 1

            while temperatures[left] >= temperatures[right]:
                right += 1
                if right == len(temperatures):
                    res.append(0)
                    break
                    
            if right < len(temperatures):
                res.append(right - left)
            
        return res
