class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        # maxHeap of size k because you want the closest distance so if you have the max distance
        # as the root, then each iteration, you can pop the max distance and since max heap
        # bubbles the max distance up, you will be left with the least values (since order doesn't)
        # matter, its fine
        # then when returning, just return the whole heap since you want all k closest distances
        maxHeap = []

        # loop through the points
        for x, y in points:
            # calculate distance and add the distance to the heap with a hashmap for the points
            # the key would be distance and the value would be the [x, y] point
            distance = x ** 2 + y ** 2
            heapq.heappush(maxHeap, (-distance, [x,y]))

            # if > k then remove one element
            if len(maxHeap) > k:
                heapq.heappop(maxHeap)

        # return the point values
        return [point for (_,point) in maxHeap]
        # above is equal to the below:
        # ret = []
        # for val in maxHeap:
        #     ret.append(val[1])
        # return ret
