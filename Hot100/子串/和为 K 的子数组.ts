function subarraySum(nums: number[], k: number): number {
    // 构造前缀和数组（需考虑前缀和会不会超出int范围）
    // 1 <= nums.length <= 2 * 104
    // -1000 <= nums[i] <= 1000
    // 最大绝对值为 2 * 10^7 未超出范围
    // 设i > j ; a 为前缀和数组。 a[i] - a[j] === k 表示 子串 j - i 和为 k
    let res = 0
    //前面加个0, 减少边缘判断
    const target = [0, ...nums]
    const n = target.length
    for (let i = 1; i < n; i++) {
        target[i] = target[i] + target[i - 1]
        for (let j = 0; j < i; j++) {
            if (target[i] - target[j] === k) res++
        }
    }
    return res
};