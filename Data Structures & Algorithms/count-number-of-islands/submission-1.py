class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        islands = 0
        def dfs(row, col): # smallest unit of work would be checking whether one tile is an island or not 
            directions = [[1,0], [-1,0], [0, 1], [0, -1]]
            # base case: stop if out of bounds or already a 0
            if row < 0 or row >= len(grid) or col < 0 or col >= len(grid[0]) or grid[row][col] == "0":
                return
            
            grid[row][col] = "0"
            for dr, dc in directions:
                dfs(row + dr, col + dc)
        # dfs easiest approach with marking - just go through each element and then branch off with directions and mark accordingly
        for row in range(len(grid)):
            for col in range(len(grid[0])):
                if grid[row][col] == "1":
                    dfs(row, col)
                    islands += 1
        return islands

    