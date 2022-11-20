// In some countries of former Soviet Union there was a belief about lucky tickets. A transport ticket of any sort was believed to posess luck if sum of digits on the left half of its number was equal to the sum of digits on the right half. Here are examples of such numbers:

// 003111    #             3 = 1 + 1 + 1
// 813372    #     8 + 1 + 3 = 3 + 7 + 2
// 17935     #         1 + 7 = 3 + 5  // if the length is odd, you should ignore the middle number when adding the halves.
// 56328116  # 5 + 6 + 3 + 2 = 8 + 1 + 1 + 6
// Such tickets were either eaten after being used or collected for bragging rights.

// Your task is to write a funtion luck_check(str), which returns true/True if argument is string decimal representation of a lucky ticket number, or false/False for all other numbers. It should throw errors for empty strings or strings which don't represent a decimal number.

// Str will represent a decimal value => could be no-decimal values || single paramater 
// str => num  / div by 2 and will check if the left and the right is equal  || if the length even then the middle num is skiped

function luckCheck(str){
    if(!str.length) throw Error
    let decimal = true;
    let numStr = str.split("").map(n=>{
        let tempNum = Number(n)
        if(isNaN(tempNum)) decimal = false;
        else return tempNum;
    } ) 

    if(!decimal) throw Error
    else if(str.length % 2 === 1){
        let leftSide=numStr.slice(0, ((numStr.length-1)/2)).reduce((acc,c) => acc + c, 0),
            rightSide=numStr.slice(((numStr.length+1)/2),numStr.length).reduce((acc,c)=> acc + c, 0)

            if(leftSide === rightSide) return true
            else return false
    }
    else {
        let leftSide=numStr.slice(0, ((numStr.length)/2)).reduce((acc,c) => acc + c, 0),
            rightSide=numStr.slice(((numStr.length)/2),numStr.length).reduce((acc,c)=> acc + c, 0) ;

        if(leftSide === rightSide) return true
        else return false
    }
}


console.log(luckCheck("003111"), true)
console.log(luckCheck("813372"), true)
console.log(luckCheck("14568"), false)
console.log(luckCheck("458rt9"), undefined)
console.log(luckCheck(""), undefined)