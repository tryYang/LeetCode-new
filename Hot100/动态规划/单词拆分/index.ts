function wordBreak(s: string, wordDict: string[]): boolean {
    const maxLen = Math.max(...wordDict.map(word => word.length));
    const words = new Set(wordDict);
    const n = wordDict.length
    const len = s.length
    const cacheMap: Map<number, boolean> = new Map();

    function dfs(i) {
        if (i === 0) return true
        if (cacheMap.has(i)) {
            return cacheMap.get(i)
        }
        for (let j = i - 1; j >= Math.max(i - maxLen, 0); j--) {
            if (words.has(s.slice(j, i)) && dfs(j)) {
                cacheMap.set(i, true)
                return true
            }
        }
        cacheMap.set(i, false)
        return false
    }
    return dfs(len)
};