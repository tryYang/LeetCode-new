/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let res = [];
    let myMap = new Map();
    for(let word of strs){        
        let sortword = sortstring(word);
        if(myMap.has(sortword)){
            myMap.get(sortword).push(word);
            console.log(myMap.get(sortword))
        }
        else{
            myMap.set(sortword,[word]);
        }
    }
   for (let value of myMap.values()) {
        res.push(value);
    }
    return res;
};

//对字符串排序
function sortstring(str){
    let split_Str = str.split('');
    split_Str.sort();
    return split_Str.join('');
}