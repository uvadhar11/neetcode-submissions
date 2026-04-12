// class Solution {
//     /**
//      * @param {character[][]} grid
//      * @return {number}
//      */
//     numIslands(grid) {
//         // so first check base case of grind being null
//         if (!grid) return 0;

//         let islands = 0;
//         let visited = new Set(); 

//         function bfs(r, c) { 
//             // get queue and start node (passing in a row, col)
//             let queue = [];
//             // we dont need visited we can set it to 0
//             visited.add({r, c}); // mark passed in node as visited (by setting to 0)
//             queue.push({r, c}); // put start node in queue
            
//             // pop the first node and process it
//             // we want a full island so need to do a while loop
//             while (queue) {
//                 const {r: row, c: col} = queue.shift();
//                 let directions = [[1,0], [-1,0], [0, 1], [0,-1]]; // add to row col to check
//                 // the neighbors

//                 // loop thru neighbors
//                 for (const [dr, dc] of directions) {
//                     // apply transformation for each neighbor
//                     let r = (row + dr); 
//                     let c = (col + dc);
                    
//                     // ensure indices are in range and if you find a 1, and its not already
//                     // visited, then add it
//                     if (r < grid.length && r >= 0 && c < grid[0].length && c >= 0 && grid[r][c] == "1"
//                     && !visited.has({r, c})) {
//                         queue.push({r, c});
//                         visited.add({r, c});
//                     }
//                 }
//             }
//         }

//         // loop through grid and call bfs on each one
//         for (let row = 0; row < grid.length; row++) {
//             for (let col = 0; col < grid[0].length; col++) {
//                 // on each index call the bfs to check the neighbors and add to visited
//                 // only want to call the bfs if its not already visited and if its a 1
//                 if (grid[row][col] === "1" && !visited.has({row, col})) {
//                     // bfs will find all neighbors in one function call due to while loop
//                     bfs(row, col);
//                     // when execution gets here, one entire island will be found, so increment
//                     // islands count
//                     islands++;
//                 }
                
//             }
//         } 
//     }
// }

class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];
        const ROWS = grid.length,
            COLS = grid[0].length;
        let islands = 0;

        const bfs = (r, c) => {
            const q = new Queue();
            q.push([r, c]);
            grid[r][c] = '0';

            while (!q.isEmpty()) {
                const [row, col] = q.pop();
                for (const [dr, dc] of directions) {
                    const nr = row + dr,
                        nc = col + dc;
                    if (
                        nr >= 0 &&
                        nc >= 0 &&
                        nr < ROWS &&
                        nc < COLS &&
                        grid[nr][nc] === '1'
                    ) {
                        q.push([nr, nc]);
                        grid[nr][nc] = '0';
                    }
                }
            }
        };

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === '1') {
                    bfs(r, c);
                    islands++;
                }
            }
        }

        return islands;
    }
}
