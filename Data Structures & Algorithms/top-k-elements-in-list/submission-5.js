class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // edge case
        if (nums.length <= k) return nums;

        // make hashmap to sort the frequencies
        const freqMap = new Map();

        // loop through nums to populate the map with frequencies - much more efficient
        // than original solution which had a while loop + indexOf inside of the for loop
        for (const num of nums) {
            // add num to the freqMap, and if it already exists, increment by 1
            // freqMap.get(num) || 0 handles if num doesn't exist already so instead of 
            // returning undefined due to errors, it'll set it to 0 (then added to by 1)
            freqMap.set(num, (freqMap.get(num) || 0) + 1);
        }

        // make the bucketsort array to hold the frequencies. 
        // length should be nums.length + 1 because that is the max number of freq for a #
        // second argument is a function to be executed for every index - here we are
        // filling with an empty array
        let freqBucket = Array.from({length: nums.length + 1}, () => []);

        // bucketSort algorithm - "sorting" the numbers by frequency corresponding to index
        // have to loop through the map, check what the frequency number is, and then put 
        // that number into the corresponding index. 
        for (const [num, freq] of freqMap) {
            freqBucket[freq].push(num);
        }

        const result = [];
        // loop backwards in the frequency array to get the k number of occurrences
        for (let i = freqBucket.length - 1; i > 0; i--) {
            // loop through the nested array
            for (let num of freqBucket[i]) {
                // push the number to the results array
                result.push(num);
                // if result.length equals k, we want to stop adding elements
                if (result.length === k) return result;
            }
        }
    }
}
