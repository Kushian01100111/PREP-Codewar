// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Examples
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"

// Number => non-negative numbers  || not even 
// Number => a string will represent the dimond of a lenght equal to the number given 

function diamonds(num){
    if(num % 2 === 0 || num < 0) return null
    // num => array of equal length 
    let diaArr = new Array(num)
    // will repeat the * equal to num and the middle of the array will be equal to that 
    for(let i = 0; i <= Math.floor(diaArr.length/2); i++){
        let asterisk = "*".repeat(num)
        if(i === 0 ) diaArr[(diaArr.length-1)/2] = asterisk
        else {
            // the next element in 
            let shortAste = "*".repeat(num - (i * 2))
            diaArr[((diaArr.length-1)/2)+i]= shortAste
            diaArr[((diaArr.length-1)/2)-i]= shortAste
        }
    }

    for(let x = 0; x <= Math.floor(diaArr.length/2); x++){
        if(x === 0) diaArr[(diaArr.length-1)/2] = diaArr[(diaArr.length-1)/2].concat("\n")
        else{
            // in the end of each string will get a \n to signify a jump in text
            // in the start of the string will get a empty space that will increase the farrer that the index of the element is from the middle one 
            let spaces =  " ".repeat(x).concat(diaArr[((diaArr.length-1)/2)+x])
            diaArr[((diaArr.length-1)/2)+x] = spaces.concat("\n")
            diaArr[((diaArr.length-1)/2)-x] = spaces.concat("\n")
        }
    }
    
    
    // array => a string 
    return diaArr.join("")
}

// console.log(diamonds(5), "  *\n ***\n*****\n ***\n  *\n")
// console.log(diamonds(3), " *\n ***\n *\n")
console.log(diamonds(1), null)
