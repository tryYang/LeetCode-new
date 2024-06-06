/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let ans = [];
     if(nums.length<3)
         return ans;
     nums.sort((a, b) => a - b)
     for(let i = 0 ;i <nums.length-2&& nums[i] <=0;i++){        
         if(i>0&&nums[i]===nums[i-1])
             continue;
         let j =i+1;        
         let k = nums.length-1;
         while(j<k){
             let sum =nums[i]+nums[j]+nums[k]
             if(sum ===0){
                 ans.push([nums[i],nums[j],nums[k]]);
                      while (j < k) {
                     // 不管前后相不相等，left 都要往前走
                     j++;
                     if (nums[j - 1] != nums[j]) break;
                 }
                 while (j < k) {
                     // 不管前后相不相等，right 都要往后走
                     k--;
                     if (nums[k + 1] != nums[k]) break;
                 }
             }                
             else if(sum<0){
                 j++;               
             }
             else{
                 k--;              
             }
         }
     }
     return ans
 };;