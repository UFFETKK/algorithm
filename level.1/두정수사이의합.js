function solution(a, b) {
  var answer = 0;
  let G = 0;
  let S = 0;

  if (a > b) (G = a), (S = b);
  else (G = b), (S = a);
  for (let i = S; i <= G; i++) {
    if (a === b) {
      answer = a;
    } else {
      answer += i;
    }
  }
  return answer;
}

//두수중 큰 수를 G에 작은 수를 S에 담고 작은수부터 큰수까지의 숫자를 더하고 두 수가 같다면 a를 리턴
