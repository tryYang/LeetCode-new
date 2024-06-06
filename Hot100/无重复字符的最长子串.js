/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length<=1)
        return s.length;
    let res =0;
    let  map = new Object();    
    let left = 0;
    map[s[left]] =left;
    let right = 1;
    while(right < s.length){
        //如果字符未存在于map中
        if(map[s[right]===null]){
            map[s[right]]=right++;//记录出现时候的index                 
        }
        //字符已经存在map中的处理
        else{            
            res = Math.max(res,right-left); 
            //窗口左边界往左边滑，滑到之前记录的index
            while(left<=map[s[right]]) {
                delete map[s[left++]];
            }            
            map[s[right]] = right++;                   
        }    
    }
    return Math.max(res,right-left);
};