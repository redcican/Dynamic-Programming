/*
Write a function 'fib(n)' that takes in a number as an argument.
The function should return n-th number of the Fibonacci sequence.
*/

const fib = (n) =>{
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
};

console.log(fib(2));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
// console.log(fib(50)); // pretty slow
console.log('-------optimized-----------');
// optimized fib
// memorization -> js object, keys will be arg to function,
// value will the be return value
const fib_optim = (n, memo = {}) => {
    if ( n in memo ) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fib_optim(n-1, memo) + fib_optim(n-2, memo);
    return memo[n];
};

console.log(fib_optim(2));
console.log(fib_optim(4));
console.log(fib_optim(5));
console.log(fib_optim(6));
console.log(fib_optim(50));

// original fib: O(2^n) time, O(n) space
// optimized fib: O(n) time, O(n) space

