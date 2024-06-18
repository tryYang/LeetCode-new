/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let pre =0;
    for (let i = 0;i<nums.length;++i){
        
        while(pre<nums.length&&!nums[pre]){
            pre++;
        }           
        nums[i]=pre<nums.length?nums[pre++]:0;        
    }
};