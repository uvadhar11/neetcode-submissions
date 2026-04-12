class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        // doing a mask of 32 1s makes the number too long
        // identifying the number of set bits.
        // 0111 = 7
        // 0110 = 6
        // AND-> 0110 = 6
        // 0110 & 0101 = 0100 (4)
        // 0100 & 0011 = 0
        let count = 0;
        while (n > 0) {
            n &= (n-1); // gets the last bit set: n & (n-1)
            // then we set n to that resulting value which is the last bit set removed.
            // do this in a loop until we get to 0, incrementing a counter
            count++;

        }
        return count;
    }
}
