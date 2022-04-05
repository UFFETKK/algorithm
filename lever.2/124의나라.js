function solution(n) {
    let answer = '';
    const arr = ['4','1','2'];
    while (n>0){
        const a = n % 3;
        answer = arr[a] + answer;
        n = Math.floor((n-1)/3);
    };
    return answer;
}
