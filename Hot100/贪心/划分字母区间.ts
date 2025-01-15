// edtion 1
function partitionLabels(s: string): number[] {
    const array = new Array(26).fill(undefined)
    const n = s.length
    for (let i = 0; i < n; i++) {
        const idx = getIndex(s[i])
        if (array[idx]) {
            array[idx][0] = Math.min(array[idx][0], i)
            array[idx][1] = Math.max(array[idx][1], i)
        }
        else {
            array[idx] = [i, i]
        }
    }
    const sortArray = array.filter(val => typeof (val) !== 'undefined').sort((a, b) => a[0] - b[0]);
    const res = []
    let segment = sortArray[0]
    for (let i = 1; i < sortArray.length; i++) {
        if (segment[1] < sortArray[i][0]) {
            res.push(segment[1] - segment[0] + 1)
            segment = sortArray[i]
        } else {
            segment[1] = Math.max(segment[1],sortArray[i][1])
        }
    }
    res.push(segment[1]-segment[0]+1)
    return res
};

function getIndex(cha: string) {
    return cha.charCodeAt(0) - 'a'.charCodeAt(0)
}