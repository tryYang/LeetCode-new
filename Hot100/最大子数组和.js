/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // dp[i] 代表以索引i为结束节点的最大子串和
    // dp[i+1] =max(dp[i]+nums[i+1], nums[i+1]) 
    let dp = 0;
    let res= -100000;
    for(let i =0;i<nums.length;i++){
        dp = Math.max(dp+nums[i],nums[i]);
        res = Math.max(dp,res);
    }
    return res;
};