function findShort(s){
    let short =  100,
        splitedString = s.split(" ")
    for(char of splitedString){
      if(char.length < short) {
        short = char.length
      }
    }
    return short
  }


  console.log(findShort("Let's travel abroad shall we"), 2)
  console.log(findShort("turns out random test cases are easier than writing out basic ones"), 3)
  console.log(findShort("bitcoin take over the world maybe who knows perhaps"), 3)
