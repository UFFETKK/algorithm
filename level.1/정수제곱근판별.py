import math
def solution(n):
    answer = 0
    nsqrt = n**(1/2)
    if n%nsqrt == 0 : answer= math.pow(nsqrt+1,2)
    else : answer = -1
    return answer
