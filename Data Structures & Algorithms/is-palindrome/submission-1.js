class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // clear input
        s = s.toLowerCase().split("").filter(letter => Solution.isAlpha(letter));

        let left = 0;
        let right = s.length - 1;

        while (left <= right) {
            if (s[left] !== s[right]) return false;
            left++;
            right--;
        }

        return true;
    }

    static isAlpha(letter) {
        let code = letter.charCodeAt(0)
        return code >= "a".charCodeAt(0) && code <= "z".charCodeAt(0) || code >= "0".charCodeAt(0) && code <= "9".charCodeAt(0);
    }
}
