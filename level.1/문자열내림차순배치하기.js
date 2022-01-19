function solution(s) {
  let answer = [];
  for (let i = 0; i < s.length; i++) {
    answer.push(s[i]);
  }
  answer.sort(function (a, b) {
    return a < b ? 1 : -1;
  });
  let res = "";
  for (let j = 0; j < answer.length; j++) {
    res += answer[j];
  }

  return res;
}
