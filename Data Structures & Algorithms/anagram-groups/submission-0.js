class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    // brute force
groupAnagrams(strs) {
    const hash = {};
    for (let i = 0; i < strs.length; i++) {
      let sArr = strs[i].split("").sort().join("");
        if (!hash[sArr]) {
            hash[sArr] = [];
        }
      hash[sArr].push(strs[i]);
    }
  return Object.values(hash);
    }
}
