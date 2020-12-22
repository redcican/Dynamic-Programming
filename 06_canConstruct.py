def canConstruct(target, wordBank, memo={}):
    if target in memo:
        return memo[target]
    if target == '':
        return True
    for word in wordBank:
        if target.find(word) == 0:
            suffix = target[len(word):]
            if canConstruct(suffix, wordBank, memo) == True:
                memo[target] = True
                return True
        
    memo[target] = False
    return False


print(canConstruct("abcdef",["ab", "abc", "cd", "def", "abcd"],memo={})) #true
print(canConstruct("skateboard",["bo", "rd", "ate", "t", "ska","sk","boar"],memo={})) #false
print(canConstruct("enterapotentpot",["a", "p", "ent", "enter", "ot","o","t"],memo={}))#true
print(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",
["e", "ee", "eee", "eeee", "eeeee","eeeeee"],memo={}))#false