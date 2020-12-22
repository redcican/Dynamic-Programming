def bestSum(targetSum, numbers):
    table = [None] * (targetSum + 1)
    table[0] = []
    
    for i in range(targetSum+1):
        if table[i] is not None:
            for num in numbers:
                combination = [*table[i], num]
                if (table[i+num] is not None) and (len(table[i+num])>len(combination)):
                    table[i+num] = combination
                    
                    
    return table[targetSum]
    
    
print(bestSum(7, [5,3,4,7])) # [7]
print(bestSum(8, [2,3,5])) # [3,5]
print(bestSum(6, [1,4,5])) # [4,4]
print(bestSum(100, [1,2,5,25])) # [25,25,25,25]