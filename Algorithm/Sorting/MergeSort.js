const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
    const l = array.length;

    if (l <= 1) return array;
    
    const middle = Math.floor(l / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(insertionSort(left), insertionSort(right))
}


function merge(left, right) {
    let result = []
   while(left.length && right.length){
    if (left[0] < right[0]){
        result.push(left.shift())
    }else {
        result.push(right.shift())
    }
   }
   return [...result, ...left, ...right];
}


const answer = mergeSort(numbers);
console.log(answer);