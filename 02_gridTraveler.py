
def grid_traveler(m:int, n:int, memo:dict={})->int:
    """optimized grid traveler problem

    Args:
        m (int): the number of rows in the grid
        n (int): the number of columns in the grid
        memo (dict, optional): dict to stored the calculated values. 
        Defaults to {}.

    Returns:
        int: the value to travel through grid
    """
    key = str(m) + ',' + str(n)
    if (key in memo):
        return memo[key]
    if (m == 1 and n == 1):
        return 1
    if (m == 0 or n == 0):
        return 0
    memo[key] = grid_traveler(m-1, n, memo) + grid_traveler(m, n-1, memo)
    return memo[key]

print(grid_traveler(1,1))
print(grid_traveler(2,3))
print(grid_traveler(3,2)) 
print(grid_traveler(3,3))
print(grid_traveler(18,18))
    