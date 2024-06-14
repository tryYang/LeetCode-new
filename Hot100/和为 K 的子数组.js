/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {    
    let res =0;
    const map = new Map();
     //重点!!!
     let pre =0;
     map.set(0,1);  
     for(const num of nums){  
         pre+=num;   
         // 前缀和相减会变成一个区间，即代表子串
         if(map.has(pre-k)){
             res+=map.get(pre-k);
         } 
          map.set(pre, (map.get(pre) ?? 0) + 1);
          ////!!!!!!!!!!!!!下面这段不知道为啥有问题
         // if(map.has(pre)){
         //     map[pre]++;
         // }
         // else{
         //     map.set(pre,1);
         // }               
     }
     return res;
 };