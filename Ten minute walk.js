// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

// 'n','s','e,'w' => inside of an array => each means a block and block is equivalent to 1 min
// the result should be true or false base on => if the walk has lasted 10 mins if they in the same original pisition 

function tenMinuteWalk(arr){
    if(arr.length > 10 || arr.length < 10) return false

    let positionArr = [0,0]
    arr.forEach(n =>{
        //E= 1 , W= -1
        if(n === 'e') positionArr[0] += 1
        if(n === 'w') positionArr[0] -= 1
        //N= 1, S= -1
        if(n === 'n') positionArr[1] += 1
        if(n === 's') positionArr[1] -= 1
    })

    return positionArr[0] === 0 && positionArr[1] === 0 ? true : false
}



console.log(tenMinuteWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true')

console.log(tenMinuteWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false')

console.log(tenMinuteWalk(['w']), 'should return false')

console.log(tenMinuteWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false')