```
const nestedArray = [1, [2, [3, 4, [5, 6]]], 7, [8, 9]];
function flattenArray(arr){
let finalArr = [];
for (let i = 0; i < arr.length; i++){
 if (Array.isArray(arr[i])) finalArr.push(arr[i]);
 else {
  const innerFlatten = flattenArray(arr[i]);
  finalArr.push(...innerFlatten);
  }
 }
}

flattenArray(nestedArray);
//output [1, 2, 3, 4, 5, 6, 7, 8, 9]


```

