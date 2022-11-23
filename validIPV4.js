// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

// Valid inputs examples:
// Examples of valid inputs:
// 1.2.3.4
// 123.45.67.89
// Invalid input examples:
// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089
// Notes:
// Leading zeros (e.g. 01.02.03.04) are considered invalid
// Inputs are guaranteed to be a single string

// string  will contains valid and invalid IP addresses
// value inside should inside of the octets 0 <= n <= 255 || non leding zeros (01 => false) || will 4 octets no more no less 

function isValidIP(strIP){
    // strIP split(".") => array => num if leading zeros => str == nums =>> 0<= n <= 255 
    let octets =  strIP.split("."),
        result = true;
    if(octets.length !== 4) return false

    for(let i = 0; i < octets.length; i++){
        if(octets[i][0] === "0" && octets[i].length > 1 || octets[i][0] === " " && octets[i].length > 1 || octets[i][octets[i].length-1] === " " && octets[i].length > 1|| isNaN(Number(octets[i]))) return false
        for(let x = 0; x < octets[i].length; x++){
            if(isNaN(parseInt(octets[i][x])) ||isNaN(Number(octets[i][x])) ) return false
        }
    }

    octets = octets.map(n=> Number(n))
    for(let i =0; i < octets.length; i++){
        if(octets[i] <= 255 && octets[i] >= 0) continue
        else{ 
            result = false
            break
        }
    }

    return result
}

// console.log(isValidIP("0.0.0.0"        ),  true);
// console.log(isValidIP("12.255.56.1"    ),  true);
// console.log(isValidIP("137.255.156.100"),  true);
// console.log(isValidIP(''               ), false);
// console.log(isValidIP('abc.def.ghi.jkl'), false);
// console.log(isValidIP('123.456.789.0'  ), false);
// console.log(isValidIP('12.34.56'       ), false);
// console.log(isValidIP('01.02.03.04'    ), false);
// console.log(isValidIP('256.1.2.3'      ), false);
// console.log(isValidIP('1.2.3.4.5'      ), false);
// console.log(isValidIP('123,45,67,89'   ), false);
// console.log(isValidIP('1e0.1e1.1e2.2e2'), false);
// console.log(isValidIP(' 1.2.3.4'       ), false);
// console.log(isValidIP('1.2.3.4 '       ), false);
// console.log(isValidIP('12.34.56.-7'    ), false);
console.log(isValidIP('1.2.3.4\n'      ), false);
console.log(isValidIP('\n1.2.3.4'      ), false);


