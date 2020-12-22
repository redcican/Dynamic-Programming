def countConstruct(target,wordBank,memo={}):
    if target in memo:
        return memo[target]
    if target == '':
        return True
    
    countTotal = 0
    for word in wordBank:
        if target.find(word) == 0:
            suffix =  target[len(word):]
            numWaysForRest = countConstruct(suffix,wordBank, memo)
            countTotal += numWaysForRest
            
    memo[target] = countTotal
    return countTotal


print("-------------------- optim --------------------")
print(countConstruct('purple', ['purp', 'p','ur', 'le','purpl'])) #2
print(countConstruct("abcdef",["ab", "abc", "cd", "def", "abcd"])) #1
print(countConstruct("skateboard",["bo", "rd", "ate", "t", "ska","sk","boar"])) #0
print(countConstruct("enterapotentpot",["a", "p", "ent", "enter", "ot","o","t"])) #4
print(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",
 ["e", "ee", "eee", "eeee", "eeeee","eeeeee"]))# 0