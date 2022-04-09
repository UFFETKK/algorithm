def solution(seoul):
    answer = seoul.index('Kim')
    
    return "김서방은 {}에 있다".format(answer)

#python 문자열 포매팅 
#1. %와 서식기호 이용
# money = 50
# s2 = 'give me %d won' % money
 
# print(s2) //give me 50 won

#2. format()
# a = 2
# b = 3
 
# s = '구구단 {0} x {1} = {2}'.format(a, b, a * b)
# print(s)


#3. f-string

# s = 'coffee'
# n = 5
# result1 = f'저는 {s}를 좋아합니다. 하루 {n}잔 마셔요.'
# print(result1)
