def allConstruct(target, wordBank,memo={}):
    if target in memo:
        return memo[target]
    if target == '':
        return [[]]
    
    result = [] 
    
    for word in wordBank:
        if target.find(word) == 0:
            suffix = target[len(word):]
            suffixWays = allConstruct(suffix, wordBank, memo)
            for way in suffixWays:
                targetWays = [word] + way
                result.append(targetWays)
            
    memo[target] = result
    return result

print(allConstruct('purple',['purp','p','ur','le','purpl'],memo={}))
# [['purp','le'],['p','ur','p','le']]
print(allConstruct('abcdef',['ab','abc','cd','def','abcd','ef','c'],memo={}))
# [['ab','cd','ef'],['ab','c','def'],['abc','def'],['abcd','ef]]
print(allConstruct('skateboard',['bo','rd','ate','t','ska','sk','boar'],memo={}))
# []
print(allConstruct('aaaaaaaaaaaaaaaaaz',['a','aa','aaa','aaaa','aaaaaa'],memo={}))
# []