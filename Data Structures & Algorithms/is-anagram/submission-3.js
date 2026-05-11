class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

    // brute force method
    isAnagram(s, t) {
        if (s.length !== t.length) return false
        
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
