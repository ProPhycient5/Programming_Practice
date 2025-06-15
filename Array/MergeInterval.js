//https://leetcode.com/problems/merge-intervals/

function merge(intervals) {
 if (intervals.length <= 1) return intervals;
 intervals.sort((a, b) => a[0] - b[0]);
 let output = [intervals[0]];

 for (let i = 1; i < intervals.length; i++ ){
    let prev = output[output.length - 1];
    let cur = intervals[i];

    if(cur[0] <= prev[1]){
        prev[1] = Math.max(prev[1], cur[1])
    }else{
      output.push(cur);
    }
 }
  return output;
};