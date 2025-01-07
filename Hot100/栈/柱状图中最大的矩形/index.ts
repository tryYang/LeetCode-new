// 1.0  思路错误
function largestRectangleArea(heights: number[]): number {
    function fn(heights: number[]): number {
        if(heights.length===0) return 0
        const map = new Map();
        let left = 0;
        let right = heights.length - 1;
        const sortArray = [...heights].sort((a, b) => a - b)
        sortArray.forEach((height) => {
            map.set(height, map.has(height) ? map.get(height) + 1 : 1)
        });
        const sortSetArray = [...new Set(sortArray)]
        let maxResult = sortSetArray[0] * (right - left + 1)
        const maxHeight = sortSetArray[sortSetArray.length - 1]
        while (left <= right) {
            let removeHeight;
            if (heights[right] > heights[left]) {
                removeHeight = heights[left]
                map.set(removeHeight, map.get(removeHeight) - 1)
                left++
            }
            else {
                removeHeight = heights[right]
                map.set(removeHeight, map.get(removeHeight) - 1)
                right--
            }
            while (sortSetArray.length > 0 && map.get(sortSetArray[0]) <= 0) {
                sortSetArray.shift();
            }
            if (sortSetArray.length > 0) maxResult = Math.max(maxResult, sortSetArray[0] * (right - left + 1))

        }
        return Math.max(maxResult, maxHeight);
    }
    let res = 0
    let area = []; 
    for(const height of heights){
        if(height === 0){
            res = Math.max(res, fn([...area]))
            area = []
            continue;
        } 
        area.push(height)
    }
    return Math.max(res, fn([...area])) 


};

// 2.0 使用单调栈