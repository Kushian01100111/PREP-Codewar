// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so 
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

// Note
// consecutive strings : follow one after another without an interruption

// Array => only with string values && it can long or short as posible && string clould any length && string can be any type of character && Only one array as a argument
// Interger => only positive values && only be a single number 

// iterate through the array and concatenate the strings in the array with each other depending of the interger  (2)=> [0] + [1] - [1] - [2] ...
// (3)=> [0] + [1] + [2] - [1] + [2] + [3] ...
// it will  retutn the first longest concatenation of the strings inside of the array
// array is empty will return ""


function longestConsec(arr,num){
    if(!arr.length) return ""

    let result = [] 

    for(let i =0; i < arr.length; i++){
        let tempArr = arr.slice(i,i+num)
        if(tempArr.length !== num) break

        result.push(tempArr.reduce((acc, c) => acc + c, ""))
    }


    return result[0]?  result.reduce((acc,c)=>{
        if(acc.length < c.length &&  acc.length !== c.length) return acc = c
        return acc
    }, "") : ""
}



console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2), "abigailtheta")
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh")
console.log(longestConsec([], 3), "")
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15), "")


