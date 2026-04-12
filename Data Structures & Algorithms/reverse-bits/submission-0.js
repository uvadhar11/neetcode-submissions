class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        /* 
            Basically, loop through the binary number. Each time, get the least significant bit
            (the leftmost bit) using n & 1, and add it to a result number with OR, but need to 
            left shift the result number so we can make a space for it to be added at the end.
            Then to loop through, we do a right shift to drop the LSB from the original number,
            and keep going until we have done this for all 32 bits. 
        */
        // Bit manipulation with loop:
        /*
        let res = 0;
        for (let i = 0; i < 32; i++) {
            let lsb = n & 1;
            res = (res << 1) | lsb;
            n = n >>> 1; // need 3 to show we working with unsigned, js internally uses signed
        }
        return res >>> 0; // have to do this to return unsigned number.
        */

        // most optimal:
        // swaps 16 bit left region and 16 bit right region and combines with or. then does same
        // for 8, 4, 2, 1. Just uses shifting and masking. Using >>> 0 to ensure unsigned.
        /* ex. since they occupy non-overlapping areas, the or can easily combine them together
        Original:     ABCD1234
        Right shift:  0000ABCD
        Left shift:   12340000
        OR result:    1234ABCD
        */

        let ret = n >>> 0;
        ret = (ret >>> 16) | (ret << 16);
        ret = ((ret & 0xff00ff00) >>> 8) | ((ret & 0x00ff00ff) << 8);
        ret = ((ret & 0xf0f0f0f0) >>> 4) | ((ret & 0x0f0f0f0f) << 4);
        ret = ((ret & 0xcccccccc) >>> 2) | ((ret & 0x33333333) << 2);
        // 0xcccccccc is 11001100 amd 0x33333333 is 00110011 so occupying nonoverlapping regions 
        ret = ((ret & 0xaaaaaaaa) >>> 1) | ((ret & 0x55555555) << 1);
        return ret >>> 0;
    }
}
