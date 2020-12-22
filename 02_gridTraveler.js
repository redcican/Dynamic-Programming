/*
Say that you are a traveler on a 2D grid. You begin in the 
top-left corner and your goal is to travel to the bottom-right
corner. You may only move down or right.

In how many ways can you travel to the goal ona grid with dimensions
m * n

write a function ``gridTraveler(m,n)` that calculates this.
*/
const gridTraveler = (m, n) =>{
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    return gridTraveler(m-1, n) + gridTraveler(m, n-1);
}

console.log(gridTraveler(1,1)); // 1
console.log(gridTraveler(2,3)); // 3
console.log(gridTraveler(3,2)); // 3
console.log(gridTraveler(3,3)); // 6
// console.log(gridTraveler(18,18)); // 2333606220 pretty slow

// original gridTraveler: O(2^(n+m)) time, O(n+m) space
// optimized gridTraveler: O(n*m) time, O(n+m) space

console.log('-------optimized-----------');
const gridTraveler_optim = (m, n, memo={}) =>{
    // are the args in the memo
    const key = m + ',' + n;
    if (key in memo) return memo[key];
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    memo[key] = gridTraveler_optim(m-1, n,memo) + gridTraveler_optim(m, n-1, memo);
    return memo[key];
}

console.log(gridTraveler_optim(1,1)); // 1
console.log(gridTraveler_optim(2,3)); // 3
console.log(gridTraveler_optim(3,2)); // 3
console.log(gridTraveler_optim(3,3)); // 6
console.log(gridTraveler_optim(18,18)); // 2333606220 