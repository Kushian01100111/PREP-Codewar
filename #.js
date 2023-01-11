// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

function backSpace(str){
    let presentElement = str.split("")
      for(let i = 0 ; i < presentElement.length; i++){
          if(presentElement[i] === "#"){
              presentElement.splice(i-1,2)
              presentElement =  presentElement.join("")
              break
          }
      }
    return presentElement 
  }
  
  function cleanString(str){
      for(let i = 0; str.includes("#"); i++){
        let top = backSpace(str)
        str = top
      }
      return str
  }

console.log(cleanString("abc#d##c"), "ac")
