/*
Write a function `canConstruct(target, wordBank)` that accepts a
target string and an array of strings.
The function should returna boolean indicating whether or not the
`target` can be constructed by concatenating elements of the 
`wordBank` array.
You may reuse elements of `wordBank` as many times as needed.

e.g.
canConstruct(abcdef,[ab, abc, cd, def, abcd]) -> abc + def: true
canConstruct(skateboard,[bo, rd, ate,t,ska, sk,boar]) -> false
canConstruct('', [cat,dog,mouse])-> true
*/
const canConstruct =(target, wordBank) => {
    if (target === '') return true;
    for (let word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            if(canConstruct(suffix, wordBank) === true){
                return true;
            }
        }
    }
    return false;
};

console.log(canConstruct("abcdef",["ab", "abc", "cd", "def", "abcd"]));//true
console.log(canConstruct("skateboard",["bo", "rd", "ate", "t", "ska","sk","boar"]));//false
console.log(canConstruct("enterapotentpot",["a", "p", "ent", "enter", "ot","o","t"]));//true
// console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",
// ["e", "ee", "eee", "eeee", "eeeee","eeeeee"]));//false pretty slow

// m = target.length
// n = wordBank.length
// time: O(n^m * m) space: O(m^2)

// optim  time: O(n*m^2), space: O(m^2)

const canConstruct_optim =(target, wordBank, memo={}) => {
    if(target in memo) return memo[target];
    if (target === '') return true;
    for (let word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            if(canConstruct_optim(suffix, wordBank, memo) === true){
                memo[target] = true;
                return true;
            }
        }
    }
    memo[target] = false;
    return false;
};
console.log('-------------- optim -----------------');
console.log(canConstruct_optim("abcdef",["ab", "abc", "cd", "def", "abcd"]));//true
console.log(canConstruct_optim("skateboard",["bo", "rd", "ate", "t", "ska","sk","boar"]));//false
console.log(canConstruct_optim("enterapotentpot",["a", "p", "ent", "enter", "ot","o","t"]));//true
console.log(canConstruct_optim("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",
["e", "ee", "eee", "eeee", "eeeee","eeeeee"]));//false pretty slow