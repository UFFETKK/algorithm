function solution(N, stages) {
    let answer = [];
    let num = stages.length;
    for (let i = 1; i <= N; i++) {
        let temp = stages.filter(n => n === i).length;       
        //각스테이지마다 실패한 사람의 숫자=temp
        answer.push([i, temp / num]);
        num -= temp;
    }
    answer = answer.sort((a,b) => b[1] - a[1]);
    //실패율로 sort
    return answer.map( a => a[0]);
    //스테이지 숫자만 Return
}
