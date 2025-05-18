//0, 1, 1, 2, 3, 5, 8, 13, 21

function fibonacciRecursive(number) {           //O(2^n)
    if (number < 2)
        return number;

    return fibonacciRecursive(number - 1) + fibonacciRecursive(number - 2)
}

// console.log(fibonacciRecursive(6))

function fibonacciIterative(number) {            //O(n)
    let output = [0, 1]

    for (let i = 2; i <= number; i++) {
        let nextNum = output[i - 1] + output[i - 2];
        output.push(nextNum);
    }

    return output[number];
}
console.log(fibonacciIterative(7))
