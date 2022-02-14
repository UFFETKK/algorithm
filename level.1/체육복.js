function solution(n, lost, reserve) {
  //     var answer = new Array(n).fill(1);
  //     let a=0;
  //     for(let i=0; i<reserve.length;i++) {
  //         answer[reserve[i]-1]++
  //     }
  //     for(let k=0; k<lost.length; k++) {
  //         answer[lost[k]-1]--;
  //     }
  //     for(let j=0; j<answer.length; j++) {
  //         if(answer[j]===0) {
  //             if(answer[j+1] ===2){
  //                 answer[j]++;
  //                 answer[j+1]--;
  //             } else if (answer[j-1]===2) {
  //                 answer[j]++;
  //                 answer[j+1]--;
  //             }
  //         }
  //     }

  //     for(let m=0;m<answer.length;m++){
  //         if(answer[m]!==0) {
  //             a++
  //         }
  //     } 이렇게 풀면 테스트 코드 몇개 통과가 안됌

  let result = new Array(n).fill(1);
  //학생 수만큼 배열 생성
  for (let i = 0; i < lost.length; i++) {
    result[lost[i] - 1] -= 1;
  }
  //잃어버린 학생 --
  for (let i = 0; i < reserve.length; i++) {
    result[reserve[i] - 1] += 1;
  }
  //두벌있는 학생 ++
  for (let i = 0; i < n - 1; i++) {
    if (
      (result[i] === 0 && result[i + 1] === 2) ||
      (result[i] === 2 && result[i + 1] === 0)
    ) {
      result[i] = 1;
      result[i + 1] = 1;
    }
  }
  // i번째 학생이 0 인데 i뒤에 학생이 2개거나 i학생이 2개인데 뒤에 학생이 0이면
  // i와 i+1학생의 배열 값을 1로 만든다;
  let answer = 0;
  for (let i = 0; i < n; i++) {
    if (result[i] >= 1) {
      answer += 1;
    }
  }
  //result의 배열값이 1이거나 2인 학생들을 앤써에 더함
  return answer;
}
