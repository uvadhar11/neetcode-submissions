import heapq

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freq = {}
        heap = []
        heapq.heapify(heap)
        for num in nums:
            freq[num] = freq.get(num, 0) + 1

        # add all values into heap with .values() loop
        # no question about duplicates because above we already 
        # determined the frequencies with unique keys
        # and this is just looping through the already
        # determined frequencies. so won't have something 
        # like (4, 1), (5, 1), (6, 1) get returned if k = 3
        # because its already unique
        for num, count in freq.items():
            heapq.heappush(heap, (count, num))
            # ensure k length in heap
            if len(heap) > k:
                heapq.heappop(heap)

        return [num for count, num in heap]
        # list comprehension, just returning the num 
        # not the count with tuple unpacking
        # [ expression  for  variable(s)  in  iterable ]


# heap -> compare the frequenices as the comparision
# but we want to link the freq with the number
# so thinking either a hashmap/freq bucket
# linked with a max heap
# -> bucket sort most optimal

# important concepts: list comprehension with python. everything is 
# an expression. also can use counter and stuff. 
# also priority queue solution would compare things lexographically -
# you can define custom comparisions like if you use (count, num)
# tuples are compared as (a1, b1) < (a2, b2) so a1<a2 if equal then b1<b2
# you can compare numbers, and strings, and other things and have more 
# length tuples. and define comparisions with objects using __lt__
# which is triggered when you do <, there's also __gt__ for > etc