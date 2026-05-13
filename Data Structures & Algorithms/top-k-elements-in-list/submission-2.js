class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
          let hash = {};
  for (let i = 0; i < nums.length; i++) {
    // create key using items of nums and make value and empty array
    if (!hash[nums[i]]) {
      hash[nums[i]] = [];
    }

    // Push the current number into its matching key bucket.
    // Example:
    // nums[i] = 2
    // hash[nums[i]] becomes hash[2]
    // so 2 gets pushed into the array stored at key 2
    hash[nums[i]].push(nums[i]);
  }

  let arr = [];
  let hashArr = Object.values(hash);
  hashArr.sort((a, b) => b.length - a.length);
  let finalArr = hashArr.splice(0,k)

  for (const value of finalArr) {
    arr.push(value[0])
  }

  return arr
}
}
