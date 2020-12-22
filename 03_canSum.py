def can_sum(targetSum:int, numbers:list, memo:dict={})->bool:
    """check whether or not the element in numbers can sum up to targetSum

    Args:
        targetSum (int): the target to sum up
        numbers (list): the array of element to sum
        memo (dict, optional): dict to store memory. Defaults to {}.

    Returns:
        bool: if can sum up to targetSum return true, otherwise false
    """
    if (targetSum in memo):
        return memo[targetSum]
    if (targetSum == 0):
        return True
    if (targetSum < 0):
        return False
    
    for number in numbers:
        remainder = targetSum - number
        if (can_sum(remainder, numbers, memo) == True):
            memo[targetSum] = True
            return True
    memo[targetSum] = False
    return False

print(can_sum(7, [2,4],memo={})) # false
print(can_sum(7, [2,3],memo={})) # true
print(can_sum(7, [5,3,4,7],memo={})) # true
print(can_sum(8, [2,3,5],memo={})) # true
print(can_sum(300, [7,14],memo={})) #  false 