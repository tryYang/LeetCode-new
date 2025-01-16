function rob(nums: number[]): number {
    const n = nums.length
    if (n < 3) return Math.max(...nums)
    let res =0;
    let f1 = nums[0]
    let f2 =  Math.max(nums[0],nums[1])
    // dp[i] ,记录的是 区间[0,...,i]能偷到最多的值 
    // 状态转移方程为 dp[i] = Math.max( dp[i -1],dp[i-2] + nums[i])
    // 比方说如果 dp[i - 1] 未取最后一位数就为最大值 则dp[i -2] === dp[i-1]
    for (let i = 2; i < n; i++) {
        const f = Math.max(f1 + nums[i],f2)
        f1 = f2
        f2 =f
    }
    return f2
};