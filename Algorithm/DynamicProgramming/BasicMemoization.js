//basic function
function sumUptoNum(n){
  let sum = 0;
  for (let i = 0; i <= n; i++ ){
    sum = sum + i;
  }
  return sum;
}

//memoized function
const cache = {};
function memoizedSumUptoNum(n){
  if (n in cache){
    return cache[n];
  }else{
    console.log("Expensive calculation")
    let sum = 0;
    for (let i = 0; i <= n; i++ ){
     sum = sum + i;
    }
    cache[n] = sum;
    return sum;
  }
}

console.log(memoizedSumUptoNum(3))
console.log(memoizedSumUptoNum(2))
console.log(memoizedSumUptoNum(3))
console.log(memoizedSumUptoNum(2))
console.log(memoizedSumUptoNum(3))
