function solution(n) {
  var answer = 0;
  if ((n / Math.sqrt(n)) % 1 === 0) {
    return (answer = (Math.sqrt(n) + 1) * (Math.sqrt(n) + 1));
  } else {
    return (answer = -1);
  }
  return answer;
}
