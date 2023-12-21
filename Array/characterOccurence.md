//Input-["a","a","b","b","c","c","c"]
//Output-a2b2c3
//Input-["a","b","b","b","b","b","b","b","b","b","b","b","b"]
//Output-ab12
//Input-["a", "a", "b", "a"]
//Output-a2ba

## The above sample input and output expect the solution to return a string output with character with its corresponding counter
## This is Coding question from `NinjaCart` Round-2, which I was able to resolve.

## Solution:

```
function counterArr(arr) {
  let finalOutput = "";
  let currentItem = "";
  let currentCounter = 1;
  for (let i = 0; i < arr.length; i++) {
    currentItem = arr[i];
    if (arr[i] === arr[i + 1]) {
      currentCounter++;
    } else {
      if (currentCounter > 1)
        finalOutput = finalOutput + currentItem + currentCounter;
      else finalOutput = finalOutput + currentItem;

      currentCounter = 1;
      // currentItem = arr[i];
    }
  }
  console.log(finalOutput);
  return finalOutput;
}
```
