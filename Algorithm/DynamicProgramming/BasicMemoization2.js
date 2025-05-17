
function memoizedSumUptoNum(n) {
    const cache = {};

    return function (n) {
        if (n in cache) {
            return cache[n];
        } else {
            console.log("Expensive calculation")
            let sum = 0;
            for (let i = 0; i <= n; i++) {
                sum = sum + i;
            }
            cache[n] = sum;
            return sum;
        }
    }
}

const memoized = memoizedSumUptoNum();

console.log(memoized(3))
console.log(memoized(3))