array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]

def largestSubarray(array):
    total = temp = 0

    for n in array:
        # temp += n if temp + n > 0 else 0
        if temp + n < 0:
            temp = 0
        else:
            temp += n
        if total < temp: total = temp

    return total



# print(largestSubarray(array))


def test(n):
    if n < 2:
        return n
    return n * test(n-1)

print(test(5))
