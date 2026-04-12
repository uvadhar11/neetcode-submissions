class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();
        for (let string of strs) {
            let count = new Array(26).fill(0);
            for (let char of string) {
                count[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            let key = count.toString();
            if (!map.has(key)) {
                map.set(key, []);
            }
            map.get(key).push(string);
        }
        return Array.from(map.values());
    }
}
