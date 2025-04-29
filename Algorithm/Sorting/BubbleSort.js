const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++){
      for (let j = 0; j < array.length; j++){
        if (array[j] > array[j+1]){
          //swap element
          let temp = array[j+1];
          array[j+1] = array[j];
          array[j] = temp;
        }
      }
    };
}

bubbleSort(numbers);
console.log(numbers);

//Time Complexity - O(n^2) as, two-level nested loop
//Space Complexity - O(1) as we are not creating any new data structure