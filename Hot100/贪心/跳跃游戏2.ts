// edition 1
// function jump(nums: number[]): number {
//     const n = nums.length
//     const jumpCountArray = new Array(n).fill(10 ** 4 + 1)
//     jumpCountArray[0] = 0;
//     for (let i = 0; i < n; i++) {
//         for (let j = 1; j <= nums[i] && i + j < n; j++) {
//             jumpCountArray[i + j] = Math.min(jumpCountArray[i + j], jumpCountArray[i] + 1)
//         }
//     }
//     return jumpCountArray[n - 1]
// };
// edition 2
function jump(nums: number[]): number {
    const n = nums.length
    let begin = 0
    let end = 0
    let step = 0
    while (end <= n) {
        let nextEnd= end 
        for (let i = begin; i <= end; i++) {
            nextEnd = Math.max(nextEnd, i + nums[i])
            if (end >= n-1) return step ;
        }
        begin = end +1 
        end = nextEnd
        step++;
    }
    return step
};