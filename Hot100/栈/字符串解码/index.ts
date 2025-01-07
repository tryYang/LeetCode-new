//遍历入栈，需要层级

function decodeString(s: string): string {
    const targetString = `1[${s}]`;
    let result = ''
    type StackData = {
        count: number,
        data?: string
    };
    const myStack: StackData[] = []
    let count = '';
    for (let c of targetString) {
        if (isNumber(c)) {
            count += c
        }
        else if (c === '[') {
            myStack.push({ count: Number(count), data: result })
            count = ''
            result = ''
        }
        else if (c === ']') {
            const {count:repeatCount,data } = myStack.pop()            
            result = data + result.repeat(repeatCount)
            count = ''
        }
        else{
            result += c
        }
    }
    return result
};
function isNumber(val: unknown) {
    return !Number.isNaN(Number(val))
}