const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(arr){
  if (arr.length <= 1)
  return arr;
  
  let pivot = arr[0];
  let left = [], right = [];
  
  for(let i = 1; i < arr.length; i++){
    if(arr[i] <= pivot){
      left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }
  
  return [...quickSort(left), pivot, ...quickSort(right)]
}


console.log(quickSort(numbers));

//Time Complexity :
//Average case - O(n log n)
//Worst case - O(n ^ 2)

//Space Complexity - 
//Average case - O(log n)
//Worst case - O(n)

//This approach uses extra arrays (left, right) → space is O(n) instead of O(log n) [recursive stack].

