function lengthOfLIS(nums: number[]): number {
    const n = nums.length
    const dp = new Array(n).fill(1)
    let res = -1
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) dp[i] = Math.max(dp[i], dp[j] + 1)
        }
        res = Math.max(res,dp[i])
    }
    return n>1? res:1
};