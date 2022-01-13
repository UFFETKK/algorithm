function solution(n) {
  var num = `${n}`;
  var answer = 0;
  for (let i = 0; i < num.length; i++) {
    answer += Number(num.charAt(i));
  }

  return answer;
}
