function solution(x) {
  var num = `${x}`;
  var h = 0;
  for (let i = 0; i < num.length; i++) {
    h += Number(num.charAt(i));
  }
  var answer = true;
  if (x % h != 0) {
    answer = false;
  } else {
    answer = true;
  }
  return answer;
}
