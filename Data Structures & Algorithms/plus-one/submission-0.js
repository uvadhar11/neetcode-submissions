class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        // ok so adding one starting from the lsb, and then have a carry value
        let carry = 0;
        for (let i = digits.length - 1; i >= 0; i--) {
            if (digits[i] == 9) {
                digits[i] = 0;
                carry = 1;
            }
            else {
                digits[i] = digits[i] + 1;
                return digits;
            }
        }
        // if hit the end and a carry still exists
        if (carry) digits.unshift(carry);
        return digits;
    }
}

/*
999
1. add 1 to lsb, its 9 previously so I make it 0, and then say carry = 1;
2. then I add the carry to the middle 9, it becomes 0, so the carry becomes 1.
3. add carry to the msb, it becomes 0, so i move on with the carry being 1
4. we hit the end, so i unshift and add 1 to the start.

*/