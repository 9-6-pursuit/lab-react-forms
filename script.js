function reverseString(string){
    let alt = ''
    if(string.length <= 6){
      for(let i = string.length - 1; i >= 0; i--){
        alt += string[i]
      }
    }
    return alt
  }

  console.log(reverseString('every'))