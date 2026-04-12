class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        # we care about each number, even if its a duplicate
        # add elements to heap with heapify using min heap method
        minHeap = []
        
        for element in nums:
            # add element
            heapq.heappush(minHeap, element)

            # if we hit k elements in the min heap then remove one
            if len(minHeap) > k:
                heapq.heappop(minHeap)
        
        # then return the root (kth largest)
        return minHeap[0] if len(minHeap) > 0 else 0
