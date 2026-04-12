class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        let map = new Map();

        for (let i = 0; i < s.length; i++) {
            let letter = s[i];

            // add s's values
            if (map.has(letter)) map.set(letter, map.get(letter) + 1);
            else map.set(letter, 1);

            // subtract t's values, so if you get to 0 for each letter, you are good.
            if (map.has(t[i])) map.set(t[i], map.get(t[i]) - 1);
            else map.set(t[i], -1);
        }

        // ensure everything is 0
        for (let val of map.values()) {
            if (val !== 0) return false;
        }

        return true;

        // r: 0
        // c: 0
        // a: 0
        // e: 0
    }
}
