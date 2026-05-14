class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // for(let i=0; i < nums.length; i++){
        //     for (let j = i + 1; j < nums.length; j++){
        //         if(nums[i] === nums[j]){
        //             return true
        //         }
        //     }
        // }


        let uniqueArr = new Set(nums)

        if(uniqueArr.size !== nums.length){
            return true
        }

        return false
    }
}













