// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]

// i d s o = string will contain the commands 
// value ++i --d **s o=> value a array after all the commnads are done the function will return  the array

function parse(str){
    // initiate the value 
    let number = 0 ,
        resultArr = [];
    // then itereate througth the str 
    for(char of str){
        // change the value acordenly with the valid commands 
        if(char === "i") number++
        else if(char === "d") --number
        else if (char === "s") number = number**2
        else if (char === "o") resultArr.push(number)
    }
    // and return the array with the value pushed by the commands
    return resultArr
}


console.log(parse("iiisdoso"), [8,64])
console.log(parse("iiisxxxdoso"), [8,64])
