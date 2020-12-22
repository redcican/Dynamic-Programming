def fib(n:int, memo:dict={})->int:
    """optimized fibnacci using memorization methods

    Args:
        n (int): the number to calculate the fib value.
        memo (dict, optional): store the calculated key and value. 
        Defaults to {}.

    Returns:
        int: fib value
    """
    if n in memo:
        return memo[n]
    if n <= 2:
        return 1
    memo[n] = fib(n-1, memo) + fib(n-2,memo)
    return memo[n]


print(fib(5))
print(fib(50))