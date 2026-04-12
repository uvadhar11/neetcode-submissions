class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // check rows
        for (let row = 0; row < board.length; row++) {
            let arr = Array(10).fill(0);

            for (let col = 0; col < board[0].length; col++) {
                let element = Number(board[row][col]);
                if (!isNaN(element)) {
                    // if not a period, then add to array ("map")
                    if (arr[element] == 0) arr[element]++;
                    else return false;
                }
            }
        }


        // check cols
        for (let col = 0; col < board[0].length; col++) {
            let arr = Array(10).fill(0);

            for (let row = 0; row < board.length; row++) {
                let element = Number(board[row][col]);
                if (!isNaN(element)) {
                    // if not a period, then add to array ("map")
                    if (arr[element] == 0) arr[element]++;
                    else return false;
                }
            }
        }


        // check the 3x3s
        let left = 0;
        let right = 3;
        let top = 0;
        let bottom = 3;

        for (let i = 0; i < 9; i++) {
            let arr = Array(10).fill(0);

            // loop through one 3x3
            for (let row = left; row < right; row++) {
                for (let col = top; col < bottom; col++) {
                    let element = Number(board[row][col]);
                    if (!isNaN(element)) {
                        // if not a period, then add to array ("map")
                        if (arr[element] == 0) arr[element]++;
                        else return false;
                    }
                }
            }

            // update limits
            left += 3;
            left = left % 9;

            right += 3;
            right = right % 9;
            
            if (left == 0) {
                top += 3;
                bottom += 3;
            }
        }

        return true;
    }
}