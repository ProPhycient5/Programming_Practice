//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

function firstRecurringCharacter(input) {
  let uniqueObj = {};
  for (let i = 0; i < input.length; i++){
    if (input[i] in uniqueObj)  return input[i]; 
    else uniqueObj[input[i]] = input[i];
  }
  return undefined;
}

console.log(firstRecurringCharacter([2,3,4,5]))
