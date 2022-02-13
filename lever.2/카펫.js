function solution(brown, yellow) {
  var answer = [];
  let a = brown + yellow;
  for (let h = 3; h <= brown; h++) {
    if (a % h === 0) {
      let w = a / h;
      answer.push(w, h);
      if ((h - 2) * (w - 2) === yellow) {
        return [w, h];
      }
    }
  }
  return answer;
}
