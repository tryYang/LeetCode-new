/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let sort_interval = intervals.sort((a,b)=>  a[0]-b[0] );
    const res =[];
    let start =sort_interval[0][0];
    let end =sort_interval[0][1];
    let flag =false;
    for(let i =1;i<sort_interval.length;++i){
        if(sort_interval[i][0]<=end){
            end = Math.max(end,sort_interval[i][1]);
            start = Math.min(start,sort_interval[i][0]);            
        }
        else{
            flag=true;
        }
        if(flag){
            res.push([start,end]);
            flag=false;
            start =sort_interval[i][0];
            end =sort_interval[i][1];
        }                    
    }
    res.push([start,end]);
    return res;
};