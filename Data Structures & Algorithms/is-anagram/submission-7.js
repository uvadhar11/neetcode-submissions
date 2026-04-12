class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false;
        let freq = new Map();
        for (let i = 0; i < s.length; i++) {
            // s adds, t subtracts since we only care about the pattern
            // being the same, and so we can do it in one loop
            freq.set(s[i], (freq.get(s[i]) || 0) + 1);
            // incorrect logic: freq.get(s[i]) + 1 || 0 due to undefined
            // and short circuiting with falsy values
            freq.set(t[i], (freq.get(t[i]) || 0) - 1);
            // ^ above we do freq.get(t[i]) || 0 then minus 1, and not 
            // freq.get or -1, since the -1 will be applied twice,
            // offsetting the values.
        }
        // check if the map is empty
        for (const [key, value] of freq) {
            if (value != 0) return false;
        }
        return true;
    } // r: 0, c: 0, a: 0, 
}
