def best_sum(targetSum, numbers, memo={}):
    if (targetSum in memo):
        return memo[targetSum]
    if targetSum == 0:
        return []
    if targetSum < 0:
        return None
    
    shortestCombination = None
    
    for num in numbers:
        remainder = targetSum - num
        remainderCombination = best_sum(remainder, numbers, memo)
        if (remainderCombination is not None):
            combination = [*remainderCombination, num]
            if (shortestCombination is  None or len(combination) < len(shortestCombination)):
                shortestCombination = combination
                
                
    memo[targetSum] = shortestCombination
    return shortestCombination

print(best_sum(7, [5,3,4,7])) # [7]
print(best_sum(8, [2,3,5])) # [3,5]
print(best_sum(8, [1,4,5])) # [4,4]
print(best_sum(100, [1,2,5,25]))