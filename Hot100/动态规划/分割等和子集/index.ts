function canPartition(nums: number[]): boolean {
    const sum = nums.reduce((acc, val) => acc += val, 0)
    if (sum % 2 !== 0) return false
    const target = sum / 2
    const n = nums.length
    const memo = Array.from({ length: n }, () => Array(target + 1).fill(-1))
    function dfs(i, t) {
        if (i < 0) return t === 0
        if (memo[i][t] !== -1) return memo[i][t]
        if (t < nums[i]) {
            memo[i][t] = dfs(i - 1, t)
        }
        else
            memo[i][t] = dfs(i - 1, t - nums[i]) || dfs(i - 1, t)
        return memo[i][t]


    }

    return dfs(n - 1, target)
};