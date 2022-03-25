function solution(s) {
    s = s.toLowerCase();
   var answer = s.split(' ').map(item => {
       let arr2 = item.split('');
       if(arr2[0]!= null ) arr2[0]= arr2[0].toUpperCase();
        return arr2.join('')
   }).join(' ')
    return answer;
}

//1. 먼저 다 소문자로 만든다
//2. split로 쪼깨고 각각의 아이템을 또 쪼갠다.
//3. 또 쪼갠것의 0번째가 눌이 아니면 0번째를 대문자로 바꿔준다
//4. 2번쪼갠것을 join해서 리턴하고 또 join한 것을 answer에 담는다
