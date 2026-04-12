class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     * 
     * 
     * Input - Sorted Array of Integers +/-
     * Output - 1-indexed of the 2 numbers that add up to the target (IMPORTANT TO UNDERSTAND THE INPUT! - 1 index based array versus 0 based)
     * 
     * Things to keep in mind for loops:
     * Initial - making of loop (using the difference for the initial value)
     * Condition - condition for loop to run
     * Step function - difference to change increment the value
     * 
     * Test case
     * nums = [2, 3, 4, 10, 100, 101];
     * targer = 14;
     * return [3, 4];
     */
    twoSum(numbers, target) {
        // brute force solution is to do nested for loops with time complexity On^2 and space complexity O(1)
        // so since this array is sorted we can use the 2 pointers algorithm
        let head = 0;
        let tail = numbers.length - 1;
        let difference = target - (numbers[head] + numbers[tail]);

        while (numbers[head] + numbers[tail] != target) {
            // if difference is greater than 0, move the pointer one forward
            if (difference > 0) {
                head++;
            }
            // if difference is less than 0, then move the pointer back (because array is sorted so want to check with a value below)
            if (difference < 0) {
                tail--;
            }
            // update difference now - make sure to do that otherwise infinite loop
            difference = target - (numbers[head] + numbers[tail]);
        }
        // its asking for 1-indexed so we need to add 1 to the indices. We need to sort the return as well.
        return [head + 1, tail + 1].sort((a, b) => {return a-b});

        // this is O(n^2) cuz iterates twice thru array because there is no condition to getting the pointers to not cross each other.
        // - redumentary solution (if there is no valid solution). If there is a valid solution then its O(n)

        // another way of doing the 2 pointers (proper way) would be to do left < right or tail < head in the while loop condition
        // and then what you would do is have another if statement where the difference == target.

        // example for this 2 pointers algorithm:
        // function twoSum(numbers, target) {
        //     let left = 0;
        //     let right = numbers.length - 1;

        //     while (left < right) {
        //         const sum = numbers[left] + numbers[right];

        //         if (sum === target) {
        //             return [left + 1, right + 1]; // Returning 1-based indices
        //         } else if (sum < target) {
        //             left++;
        //         } else {
        //             right--;
        //         }
        //     }
            
        //     return []; // If no solution is found
        // }

        // // Example usage:
        // const numbers = [2, 7, 11, 15];
        // const target = 9;
        // console.log(twoSum(numbers, target)); // Output: [1, 2]
    }
}
