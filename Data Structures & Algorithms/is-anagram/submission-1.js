class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false
        const sArray = s.split("").sort().join("");
        const tArray = t.split("").sort().join("");

        if (sArray === tArray) {
            return true
        }

        return false
    }
}
