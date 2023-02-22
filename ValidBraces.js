// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
// Examples

// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

// Constraints

// 0 <= input.length <= 100


function validParentheses(parens) {
if(parens === "") return true

    let truesAndFalse = [],
        split = parens.split("")

    for(let i =0 ; i < split.length; i++){
        if(split[i] === "("){
            for(let x = i+1; x < split.length; x++){
                if(split[x] === ")" && (x-1 === i || split[x-1] !== "(")){
                    truesAndFalse.push(true)
                    break
                }else if( x === split.length-1) truesAndFalse.push(false)
            }
        }
    }
   if(truesAndFalse.includes(false) || parens.length <= 1 || truesAndFalse.length !== parens.length/2)return false
   else return true
}

console.log(validParentheses(""), false)
// console.log(validParentheses(")(()))"), false)
// console.log(validParentheses("("), false)
// console.log(validParentheses("(())((()())())"), true)
// console.log(validParentheses("()"), true)
// console.log(validParentheses("()"), true)
