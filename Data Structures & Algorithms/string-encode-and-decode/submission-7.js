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
    // instead of fixed padding use the number then a hashtag and u get the 
    // length by iterating until you see a hashtag the first time
    // which works even if the hashtag is the first character in the string
    // this allows for scalability
    encode(strs) {
        //
        let res = "";

        for (let str of strs) {
            res += (str.length + "#" + str);
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
        while (numIndex < str.length) {
            // get the num
            let num = "";
            while (str[numIndex] != "#") {
                num += str[numIndex];
                numIndex++;
            }
            // increment one to move on from inserted hashtag
            numIndex++;
            // convert num to number
            num = +num;

            // get the string
            let s = str.substring(numIndex, numIndex + num); // 2,7
            
            // push the string
            arr.push(s);

            // set up next iteration
            numIndex += num;//7
            // 05hello05world
        }
        return arr;
    }
}
