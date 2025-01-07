function isValid(s: string): boolean {
    const operatePair = new Map([
        ['(',')'],
        ['{','}'],
        ['[',']'],

    ]);
    const leftChar=[...operatePair.keys()]
    const stack = [];
    for(const c of s){
        if(leftChar.includes(c)){
            stack.push(c)
        }
        else{
            if(stack.length ===0) return false
            const topData = stack.pop()
            if(operatePair.get(topData) !== c) return false            
        }
    }
    return stack.length ===0
};