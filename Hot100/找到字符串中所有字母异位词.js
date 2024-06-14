/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let res = [];
    if(s.length <p.length){
        return res;
    }
    const chuangkou = new Array(26).fill(0);
    const arr_p = new Array(26).fill(0);
    for(let i = 0 ;i<p.length;i++){
        ++chuangkou[s[i].charCodeAt() - 'a'.charCodeAt()];
        ++arr_p[p[i].charCodeAt() - 'a'.charCodeAt()];
    }
    if(chuangkou.toString()===arr_p.toString()){
        res.push(0);
    }
    for(let i = 0;i<s.length - p.length;++i){
       --chuangkou[s[i].charCodeAt() - 'a'.charCodeAt()];
        ++chuangkou[s[i+p.length].charCodeAt() - 'a'.charCodeAt()];
        if(chuangkou.toString()===arr_p.toString()){
        res.push(i+1);
    }
    }
    return res;
};