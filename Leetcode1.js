// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.


let twoSum = function(nums, target) {
    //nums for loop or while and reduce on the array
    let index = [],
        firstIndex = 0; 
    for(let i = firstIndex + 1 ; i < nums.length; i++){
        if((nums[firstIndex] + nums[i]) === target){
            index.push(firstIndex,i)
            break
        }else if(i === nums.length - 1 ){
            ++firstIndex
            i = firstIndex 
        }
    }
    //target will return the indexes that sum up are equal to the target
    return index
};

// console.log(twoSum([2,7,11,15],9), [0,1])
// console.log(twoSum([3,2,4],6), [1,2])
console.log(twoSum([2,5,5,11],10), [0,2])