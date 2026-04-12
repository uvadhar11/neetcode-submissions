class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let obj = {"(" : ")", "[" : "]", "{" : "}"};

        for (let str of s) {
            if (str === "(" || str === "["  || str === "{") {
                stack.push(str);
            }
            else {
                if (str === obj[stack[stack.length - 1]]) {
                    stack.pop();
                }
                else {
                    return false;
                }
            }
        }
        
        if (stack.length === 0) return true;
        else return false; 
    }
}