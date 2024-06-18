/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const L = [1,nums[0]];
    const R = [1];
    const res =[];
    if(nums.length===2)
        return [nums[1],nums[0]];
        
    for(let i = 2;i<nums.length;i++){
        L.push(nums[i-1]*L[i-1]);
    }
    nums.reverse();
    R.push(nums[0]);
    for(let i = 2;i<nums.length;i++){
        R.push(nums[i-1]*R[i-1]);
    }
    R.reverse();    
    for(let i = 0 ; i<nums.length;i++){
        res.push(L[i]*R[i]);
    }
    return res;
};