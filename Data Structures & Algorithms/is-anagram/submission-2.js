class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

    // brute force method
    isAnagram(s, t) {
        // sort the string
        let sSort = s.split("").sort().join("")
        let tSort = t.split("").sort().join("")

        if(sSort === tSort){
            return true
        }else{
            return false
        }
    }
}
