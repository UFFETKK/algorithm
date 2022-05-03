import math
def solution(n, k):
    answer = 0
    nn =convert(n,k)
    arr = list(nn.split('0')) 
    for i in arr :
        if len(i)!=0 and int(i)>1 :
            tf =  is_prime(int(i))
            if tf : answer+=1
    return answer

#소수인지 tf
def is_prime(x):
    for i in range(2, math.ceil(math.sqrt(x+1))):
        if x % i == 0:
            return False 
    return True 
    
#10진수 n진수 변환
def convert(n, q):
    rev_base = ''

    while n > 0:
        n, mod = divmod(n, q)
        rev_base += str(mod)

    return rev_base[::-1]
