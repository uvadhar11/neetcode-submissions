class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase();
        let left = 0;
        let right = s.length - 1;
        while (left < right) {
            if (!this.isAlphanumeric(s[left])) {
                left++;
                continue;
            }

            if (!this.isAlphanumeric(s[right])) {
                right--;
                continue;
            }

            if (!(s[left] == s[right])) return false;
            left++;
            right--;
        }

        return true;
    }

    isAlphanumeric(char) {
        // if letter or number
        // don't necessarily need .charCodeAt(0)
        if (char >= "a" && char <= "z" || char >= "0" && char <= "9") return true;
        else return false;
    }
}
