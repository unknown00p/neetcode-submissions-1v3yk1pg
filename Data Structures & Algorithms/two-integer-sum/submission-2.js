class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    // brute force
    twoSum(nums, target) {
        // here we are iterating over nums based on length of array
        // we are getting values of array from index 0th to nums.length
        for(let i = 0; i < nums.length; i++){

            // here we are doing the same but we are starting from +1 index of array 
            for(let j = i + 1; j < nums.length; j++){
                if(nums[i] + nums[j] == target){
                    return [i, j]
                }
            }
        }
    }
}