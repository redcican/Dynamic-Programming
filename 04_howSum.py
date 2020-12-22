def howSum(targetSum:int, numbers:list, memo:dict={})->list:
    if (targetSum in memo):
        return memo[targetSum]
    if (targetSum == 0):
        return []
    if (targetSum < 0):
        return None
    
    for num in numbers:
        remainder = targetSum - num
        reainderResult = howSum(remainder, numbers, memo)
        if (reainderResult != None):
            memo[targetSum] = [*reainderResult, num]
            return memo[targetSum]
        
    memo[targetSum] = None
    return None

print(howSum(7, [2,3],{})) # [3,2,2]
print(howSum(7, [5,3,4,7],{})) # [4,3]
print(howSum(7, [2,4],{}))# None
print(howSum(8, [2,3,5],{})) # [2,2,2,2]
print(howSum(300, [7,14],{})) # None