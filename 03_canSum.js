/*
Write a function `canSum(targetSum, numbers)` that takes in a 
targetSum and an array of numbers as arguments.

The function should return a boolean indicating whether or not
it is possible to generate the targetSum using numbers from array.

You may use an element of the array as many times as need.
You may assume that all input numbers are non-negative.

e.g.

canSum(7, [5,3,4,7]) -> true 3+7 or 7
canSum(7, [2, 4]) -> false
*/
const canSum = (targetSum, numbers) => {
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let num of numbers) {
        const remainder = targetSum - num;
        if(canSum(remainder, numbers) === true){
            return true;
        }
    }

    return false;
};

console.log(canSum(7, [2,3])); // true
console.log(canSum(7, [5,3,4,7])); // true
console.log(canSum(7, [2,4])); // false
console.log(canSum(8, [2,3,5])); // true
// console.log(canSum(300, [7,14])); // false pretty slow

// m = targetSum, n = array length
// original canSum: O(n^m) time, O(m) space
// optimized canSum: O(n*m) time, O(m) space
console.log('-------optimized-----------');

const canSum_optim = (targetSum, numbers, memo={}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let num of numbers) {
        const remainder = targetSum - num;
        if(canSum_optim(remainder, numbers, memo) === true){
            memo[targetSum] = true;
            return true;
        }
    }
    memo[targetSum] = false;
    return false;
};

console.log(canSum_optim(7, [2,4])); // false
console.log(canSum_optim(7, [2,3])); // true
console.log(canSum_optim(7, [5,3,4,7])); // true
console.log(canSum_optim(8, [2,3,5])); // true
console.log(canSum_optim(300, [7,14])); // false 