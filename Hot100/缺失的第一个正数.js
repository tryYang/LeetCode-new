/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let n =nums.length;
    nums.forEach((val,index)=>{
        nums[index]=val<=0?n+1:val;
    });
    nums.forEach((val,index)=>{
        let k = Math.abs(val);
        if(k<=n)
            nums[k-1] = -Math.abs(nums[k-1]);
    });
    for(let i =0;i<n;++i){
        if(nums[i]>0)
            return i+1;
    }
    return n+1;
};