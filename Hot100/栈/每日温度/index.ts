function dailyTemperatures(temperatures: number[]): number[] {
    const result = new Array(temperatures.length).fill(0)
    const stack: number[] = [0];
    for (let i = 1; i < temperatures.length; i++) {
        let topData = temperatures[stack[stack.length - 1]]
        if(temperatures[i] <= topData){
            stack.push(i)
            continue;
        }
        while(stack.length>0 && temperatures[stack[stack.length - 1] ]< temperatures[i]){
            const index = stack.pop()
            result[index] = i - index
        } 
        stack.push(i)      
    }

    return result;
};