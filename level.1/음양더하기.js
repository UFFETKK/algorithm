function solution(abs, signs) {
  var answer = 0;
  for (let i = 0; i < abs.length; i++) {
    if (signs[i]) answer += abs[i];
    else answer += -abs[i];
  }
  return answer;
}
