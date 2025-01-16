function maxProduct(nums: number[]): number {
    // dp[i] 以i为结尾成乘积最大数
    const target = [1, ...nums]
    const n = target.length
    const minDP = new Array(n).fill(1)
    const maxDP = new Array(n).fill(1)
    let res = -Infinity
    for (let i = 1; i < n; i++) {
        minDP[i] = Math.min(target[i], maxDP[i - 1] * target[i], minDP[i - 1] * target[i],)
        maxDP[i] = Math.max(target[i], minDP[i - 1] * target[i], maxDP[i - 1] * target[i])
        res = Math.max(res, maxDP[i])
    }
    return res
};