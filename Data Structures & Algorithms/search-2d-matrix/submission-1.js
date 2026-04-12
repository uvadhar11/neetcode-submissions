class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let ROWS = matrix.length;
        let COLS = matrix[0].length;
        let left = 0;
        let right = ROWS * COLS - 1; // gets number of blocks, subtract by 1 cuz 0-based indexing
        let mid;
        let row;
        let col;

        while (left <= right) {
            mid = left + Math.floor((right - left) / 2);
            // if off by 1 (common issue), double check rows and cols calculations. 
            // the rows and cols here are 0 based. 
            row = Math.floor(mid / COLS); // 6 / 4 = 1
            col = mid % COLS; // 6 % 4 = 2

            if (target > matrix[row][col]) {
                left = mid + 1;
            }
            if (target < matrix[row][col]) {
                right = mid - 1;
            }
            if (target == matrix[row][col]) {
                return true;
            }
        }

        return false;
    }
}
