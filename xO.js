// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// str => x - o 
// Count x - o if equal return true esle false 

function XO(str){
    // str => count the x - o || let x - o ++x ++x  || x === o ? true : false
    let x = 0,
        o = 0;
    for(char of str){
        if(char === 'x') x++
        else if (char === 'o') o++
    }

    if(x === o) return true
    else return false
}

console.log(XO("ooxx"), true)
console.log(XO("xooxx"), false)
console.log(XO("oompXxx"), true)
