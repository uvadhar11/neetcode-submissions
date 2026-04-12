class KthLargest:

    def __init__(self, k: int, nums: List[int]):
        self.minHeap, self.k = nums, k
        # given this list of nums, we need to make a heap with it
        heapq.heapify(self.minHeap)
        # now if its more than k elements in the heap, then pop the smallest element (which
        # is at the root, to get the kth largest elements by the time the length is k)
        while len(self.minHeap) > k:
            heapq.heappop(self.minHeap)

    def add(self, val: int) -> int:
        # if smaller then no need to do the heap logic (even tho it works, dont need this if)
        # if the list is initalized to 0 elements, and we try to access this, we will get an error
        # so we'd need to add a check to ensure its not empty
        # this if is unnecessary though so I am removing it
        #if val <= self.minHeap[0]:
        #    return self.minHeap[0]
        # add the new element if its larger than k
        heapq.heappush(self.minHeap, val) # add the element to the heap
        if len(self.minHeap) > self.k: # if the the number of element in heap > k then pop min
            heapq.heappop(self.minHeap)
        return self.minHeap[0] # return the kth largest element (the min element since heap)
        # is of length k
        