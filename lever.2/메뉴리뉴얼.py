from itertools import combinations
from collections import Counter

def solution(orders, course):
    answer = []
    for k in course:
        temp = []
        for mli in orders:
            for li in combinations(mli, k): 
                temp.append(''.join(sorted(li)))
        sort = Counter(temp).most_common()
        for key, value in sort : 
            if value > 1 and value == sort[0][1] : answer.append(key)
    return sorted(answer)
