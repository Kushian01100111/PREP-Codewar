function isIsogram(str){
    let temp = str.toLowerCase()
    for(let char of temp){
      if(temp.indexOf(char) !== temp.lastIndexOf(char)) return false
    }
    return true
  }

console.log(isIsogram("Dermatoglyphics"), true)
console.log(isIsogram("isogram"), true)
console.log(isIsogram("aba"), false)
console.log(isIsogram("moOse"), false)
console.log(isIsogram("isIsogram"), false)

