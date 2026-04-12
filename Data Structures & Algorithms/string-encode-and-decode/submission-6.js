class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    // pattern: we can't use a delimeter since 
    // it could be in the string, so use
    // length prefixing, storing the length
    // of each word to cut. because the length of the first string
    // is stored before we print the first string, we don't have to 
    // worry about the same numbers as the length being in the first
    // string.
    encode(strs) {
        //
        let res = "";
        let maxStringLength = 3;

        for (let str of strs) {
            res += String(str.length).padStart(maxStringLength, "0") + str;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // 
        let arr = [];
        let numIndex = 0;
        let maxStringLength = 3;
        while (numIndex < str.length) {
            let num = +str.substring(numIndex, numIndex + maxStringLength); // 5
            let s = str.substring(numIndex + maxStringLength, numIndex + num + maxStringLength); // 2,7
            numIndex += (num + maxStringLength);//7
            // 05hello05world
            arr.push(s);
        }
        return arr;
    }
}
