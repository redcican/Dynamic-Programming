/*
Write a function `countConstruct(target, wordBank)` that accepts a target string an an 
array of strings.

The function should return the number of ways that the target can be constructed
by concatenating elements of the wordBank array.

you may resue of `wordBank` as many times as needed.

e.g. countConstruct(abcdef,[ab ,abc,cd,def,abcd]) -> 1 abc + def
countConstruct(purple, [purp, p,ur, le,purpl])->2 purp + le, p + ur + p + le 
*/

const countConstruct = (target, wordBank) => {
    if (target === '') return true;

    let totalCount = 0;

    for (let word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            const numWaysForRest = countConstruct(suffix, wordBank);
            totalCount += numWaysForRest;
        }
    }


    return totalCount;
};
console.log(countConstruct('purple', ['purp', 'p','ur', 'le','purpl']));//2
console.log(countConstruct("abcdef",["ab", "abc", "cd", "def", "abcd"]));//1
console.log(countConstruct("skateboard",["bo", "rd", "ate", "t", "ska","sk","boar"]));//0
console.log(countConstruct("enterapotentpot",["a", "p", "ent", "enter", "ot","o","t"]));//4
// console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",
 // ["e", "ee", "eee", "eeee", "eeeee","eeeeee"]));//0 pretty slow


 const countConstruct_optim = (target, wordBank, memo={}) => {
    if (target in memo) return memo[target];
    if (target === '') return true;

    let totalCount = 0;

    for (let word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            const numWaysForRest = countConstruct_optim(suffix, wordBank,memo);
            totalCount += numWaysForRest;
        }
    }

    memo[target] = totalCount;
    return totalCount;
};
console.log("-------------------- optim --------------------");
console.log(countConstruct_optim('purple', ['purp', 'p','ur', 'le','purpl']));//2
console.log(countConstruct_optim("abcdef",["ab", "abc", "cd", "def", "abcd"]));//1
console.log(countConstruct_optim("skateboard",["bo", "rd", "ate", "t", "ska","sk","boar"]));//0
console.log(countConstruct_optim("enterapotentpot",["a", "p", "ent", "enter", "ot","o","t"]));//4
console.log(countConstruct_optim("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",
 ["e", "ee", "eee", "eeee", "eeeee","eeeeee"]));//0 
