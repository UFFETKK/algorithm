function solution(ss){
    var answer = 0;
    let s = ss.split('')

    for(let i=0; i<s.length; i++) {
        if(s[i] == '(') {
            answer++;
        } else {
            answer--;
            }
        if(answer < 0) return false;
        }
        return answer == 0 ? true : false;
}
