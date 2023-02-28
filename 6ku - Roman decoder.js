// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

// Example:

// solution('XXI'); // should return 21

// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000


function solution (roman) {
    let result = 0,
        romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'],
        decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]

    for (let i = 0; i < roman.length; i++){
        if(romanNumerals.includes(roman[i]+roman[i+1])){
            let current = roman[i]+roman[i+1]
            result += decimals[romanNumerals.indexOf(current)]
            i++
            continue
        }
        if(romanNumerals.includes(roman[i])){
            result += decimals[romanNumerals.indexOf(roman[i])]
        }
    }

      return result;
}

        console.log(solution('XXI', 21));
		console.log(solution('I'), 1);
		console.log(solution('IV'), 4);
		console.log(solution('MMVIII'), 2008);
		console.log(solution('MDCLXVI'), 1666);