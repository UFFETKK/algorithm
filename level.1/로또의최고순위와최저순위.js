function solution(lottos, win_nums) {
  var answer = [];
  let z = 0;
  let n = 0;
  for (let i = 0; i < lottos.length; i++) {
    if (lottos[i] === 0) z++;
    if (win_nums.includes(lottos[i])) n++;
  }
  answer.push(n, n + z);
  for (let k = 0; k < answer.length; k++) {
    let a = answer[k];
    if (a === 6) answer[k] = 1;
    else if (a === 5) answer[k] = 2;
    else if (a === 4) answer[k] = 3;
    else if (a === 3) answer[k] = 4;
    else if (a === 2) answer[k] = 5;
    else answer[k] = 6;
  }
  return answer.sort((a, b) => a - b);
}
