function reverseStringIterative(str){
    let letters = str.split('');
    let output = ""
    for (let i = letters.length - 1; i >= 0; i--){
        output = output + letters[i];
    }
    return output;
  }
  
  // console.log(reverseStringIterative("HELLO"));
  
  function reverseStringRecursive(Originalstr, reverseStr = ''){
    if (Originalstr.length > 0){
      let tempStr = reverseStr + Originalstr[Originalstr.length - 1]
      return reverseStringRecursive(Originalstr.slice(0, -1), tempStr)
    }
    
    return reverseStr;
  }
  
  console.log(reverseStringRecursive("HELLO"));
