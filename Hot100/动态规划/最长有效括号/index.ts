
class Stack<T>{
    stack: T[]
    constructor(initVal?: T[]) {
        this.stack = initVal ?? []
    }
    push(val: T) {
        this.stack.push(val)
    }
    pop() {
        if (this.stack.length > 0) {
            return this.stack.pop()
        }
        else {
            throw Error("stack 为空")
        }
    }
    empty() {
        return this.stack.length === 0
    }
}

function longestValidParentheses(s: string): number {
    const stack = new Stack<number>()
    const n = s.length
    const dp = new Array(n).fill(0)
    let res= 0
    for (let i = 0; i < n; i++) {
        if (s[i] === '(') {
            dp[i] = 0
            stack.push(i)
            continue
        }
        if (stack.empty()) dp[i] = 0
        else {
            const idx = stack.pop()
            dp[i] =  i - idx + 1 + (idx > 0 ? dp[idx - 1] : 0)
            res = Math.max(res,dp[i])
        }
    }
    return res

};
