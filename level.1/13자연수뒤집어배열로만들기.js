function solution(n) {
  var answer = [];
  var num = `${n}`;
  for (let i = 0; i < num.length; i++) {
    answer.unshift(Number(num.charAt(i)));
  }
  return answer;
}
