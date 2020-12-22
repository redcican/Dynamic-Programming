def howSum(targetSum, numbers):
    table = [None] * (targetSum + 1)
    table[0] = []
    
    for i in range(targetSum+1):
        if not table[i] is None:
            for num in numbers:
                if (i+num) < (targetSum+1):
                    table[i+num] =[*table[i], num]
                
                
    return table[targetSum]

print(howSum(7, [2,3])) #[3,2,3]
print(howSum(7, [5,3,4,7])) # [4,3]
print(howSum(7, [2,4])) # None
print(howSum(8, [2,3,5])) # [2,2,2,2]
print(howSum(300, [7,14])) # None
