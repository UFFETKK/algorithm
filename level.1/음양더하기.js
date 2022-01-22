function solution(abs, signs) {
  var answer = 0;
  for (let i = 0; i < abs.length; i++) {
    if (signs[i]) answer += abs[i];
    else answer += -abs[i];
  }
  return answer;
}

// signs의 i번째가 true이면 answer에 양수를 더하고 false면 음수를 더함
