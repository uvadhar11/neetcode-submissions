class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        # want to smash together the 2 largest elements
        # brute force would be iterating through the list and then picking
        # while len(stones) > 1: # O(n)
            # sort the array O(n)
            # subtract the first 2 values (greatest) stones[0] - stones[1]
        # max heap = negative values

        maxHeap = [-x for x in stones] # O(n) convert each value to negative to use max heap
        # initially do heapify, then going to pop 2 of the max elements (since first pop)
        # will pop the max, and then the new max will be the root, and then the next pop
        # will pop the second max. Then we are going to add the result of it (either one stone)
        # or adding none based on the result of the subtraction. Do this until heap has one 
        # element left
        heapq.heapify(maxHeap)

        # we can use length because a heap is just a list under the hood
        while len(maxHeap) > 1:
            # get 2 largest elements
            el1 = heapq.heappop(maxHeap)
            el2 = heapq.heappop(maxHeap)

            # subtract the 2 (the first is always >= 2)
            result = -el1 - -el2
            if result > 0:
                # add el1 back
                heapq.heappush(maxHeap, -result)
            # else we don't need to add anything else
        
        return -maxHeap[0] if len(maxHeap) != 0 else 0
        