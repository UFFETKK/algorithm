def solution(left, right):
    answer = 0
    for a in range(left,right+1) :
        d = 0
        for i in range(1,a+1) :
            if a%i == 0 : d=d+1
        if d%2 ==0 : answer +=a
        else : answer -= a
    return answer
