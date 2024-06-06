var longestConsecutive = function(nums) {
    nums = new Set(nums)
    const map = new Object();//记录出现的数
    for(let num of nums){
        map[num]= true;
    }
    let res = 0;
    for(let num of nums){     
        //先找到最开始的数     
        if(!map[num-1]){
            let length = 1;
            while(map[++num]){           
                length++;
            }
            res = Math.max(res,length);
        }                
    }
    return res;
};