class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    // validAnagram on leetcode
    isAnagram(s, t) {
        if (s.length != t.length) return false;
        if (s.length == 0) return true;
        let p1 = new Array(26).fill(0);
        let p2 = new Array(26).fill(0);
        for (let i = 0; i < s.length; i++) {
            p1[s[i].charCodeAt(0) - "a".charCodeAt(0)] += 1;
            p2[t[i].charCodeAt(0) - "a".charCodeAt(0)] += 1;
        }
        return p1.toString() === p2.toString();
    }
}