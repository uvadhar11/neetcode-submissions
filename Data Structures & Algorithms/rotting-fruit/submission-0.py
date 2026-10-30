from collections import deque
class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        q = deque()
        oranges = 0
        minutes = 0
        copy = [[0] * len(grid[0]) for _ in range(len(grid))]

        # initialize
        for r in range(len(grid)):
            for c in range(len(grid[0])):
                if grid[r][c] == 1:
                    oranges += 1
                if grid[r][c] == 2:
                    q.append((r, c))
                copy[r][c] = grid[r][c]

        # bfs
        while q:
            layer_length = len(q)
            start_oranges = oranges
            for _ in range(layer_length):
                r, c = q.popleft()
                # check neighbors
                directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
                for rdir, cdir in directions:
                    new_r = r + rdir
                    new_c = c + cdir
                    # check out of bounds
                    if 0 <= new_r < len(copy) and 0 <= new_c < len(copy[0]):
                        val = copy[new_r][new_c]
                        # if fresh, then infect
                        if val == 1:
                            copy[new_r][new_c] = 2
                            oranges -= 1
                            q.append((new_r, new_c))
                
            # increment minutes only if something could be infected (and this is only when we get a new layer)
            if start_oranges != oranges:
                minutes += 1

        
        if oranges > 0:
            return -1
        else:
            return minutes
                    