function solution(phone_number) {
  var answer = "";
  for (let i = 1; i <= phone_number.length - 4; i++) {
    answer += "*";
  }
  answer += phone_number.slice(-4);

  return answer;
}
