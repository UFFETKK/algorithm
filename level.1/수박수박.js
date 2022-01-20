function solution(n) {
  var answer = "";
  answer = "수박".repeat(n / 2);
  if (n % 2 !== 0) {
    answer += "수";
  }
  return answer;
}

//수박을 n/2만큼 반복하고
//홀수면 반복한것에 '수' 추가
