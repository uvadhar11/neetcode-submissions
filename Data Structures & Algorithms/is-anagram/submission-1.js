class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // brute force solution would be nested for loop
        // 1. Ask interviewer: What is an anagram?
        // 2: Ask interviewer: What are some guard clauses like lengths = same?
        // guard clause for lengths
        if (s.length !== t.length) return false;
        // even if problem says things like all lowercase then just ask anyways and make sure.
        const map1 = new Map();
        // populate map1 with letter, occurrence of that letter
        for (const letter of s) {
            // if the map already has this letter in it, then increase the number of occurrences by 1
            if (map1.has(letter)) map1.set(letter, map1.get(letter) + 1);
            // if the map doesn't already have this letter in it, then add it. 
            else map1.set(letter, 1);
        }
        // populate map2 for the second string
        const map2 = new Map();
        for (const letter of t) {
            // if the map already has this letter in it, then increase the number of occurrences by 1
            if (map2.has(letter)) map2.set(letter, map2.get(letter) + 1);
            // if the map doesn't already have this letter in it, then add it. 
            else map2.set(letter, 1);
        }
        let valid = true;
        // now check if map1 equals map2. === is just memory address so got to create your own way
        map1.forEach((val, key) => {
            // check for if the current letter does not exist in the second string (but does in the first string).
            // returning true or false from a forEach is the same as a continue in a regular loop
            if (map2.get(key) === undefined) {
                valid = false;
            };
            // if number of this occurrences equals the 2nd map's occurrences then ur good
            if (val !== map2.get(key)) {
                valid = false;
            };
        })
        return valid;
    }
}
// adding for time complexity - if its nested its multiplied, if its sequential its addition.
// Time Complexity: O(s) + O(t) + O(s or t) = O(2s) + O(t) -> still linear. Not the best linear solution.
// from above ^ the O(n) stuff applies for each array/parameter. So you would kind of add like how we did it above.
// Since looping through the map1 is the same size as s or t, its time complexity would be O(s or t).
