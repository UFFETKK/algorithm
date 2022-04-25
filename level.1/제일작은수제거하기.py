def solution(arr):
    answer=[]
    if len(arr) ==1 : return [-1]
    else :
        n = min(arr)
        for i in arr : 
            if i != n : answer.append(i)
        return answer
