def solution(x):
    h =0
    k=str(x)
    for i in range(len(k)): 
        h += int(k[i])
    return True if x%h ==0 else False
