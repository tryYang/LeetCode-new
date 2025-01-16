
// 记忆化搜索
// function numSquares(n: number): number {
//     const squareNums = []
//     for (let i = 1; i <= n; i++) {
//         const sqrtNum = Math.sqrt(i)
//         if (sqrtNum === Math.floor(sqrtNum)) squareNums.push(i)
//     }
//     const numLen = squareNums.length
//     const array = Array.from({ length: numLen }, () => Array(n+1).fill(-1))
//     function dfs(i, k) {
//         if (i < 0) return k === 0 ? 0 : Infinity
//         if (array[i][k] !== -1) return array[i][k]
//         if (k < squareNums[i]) array[i][k] = dfs(i - 1, k)
//         else
//             array[i][k] = Math.min(dfs(i - 1, k), dfs(i, k - squareNums[i]) + 1)
//         return array[i][k]
//     }

//     return dfs(numLen - 1, n)
// };

// 动态规划 递推

function numSquares(n: number): number {
    const squareNums = [0]
    for (let i = 1; i <= n; i++) {
        const sqrtNum = Math.sqrt(i)
        if (sqrtNum === Math.floor(sqrtNum)) squareNums.push(i)
    }
    const numLen = squareNums.length
    const dp = Array.from({ length: numLen }, () => Array(n + 1).fill(Infinity))
    dp[0][0] = 0
    for (let i = 1; i < numLen; i++) {
        for (let j = 0; j <= n; j++) {
            if (squareNums[i] > j)
                dp[i][j] = dp[i - 1][j]
            else {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - squareNums[i]] + 1)
            }
        }

    }
    return dp[numLen-1][n]
};