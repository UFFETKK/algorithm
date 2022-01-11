function solution(n) {
  let res = `${n}`;
  let arr = [];
  for (let i = 0; i < res.length; i++) {
    arr.push(res[i]);
  }
  arr.sort(function (a, b) {
    return b - a;
  });
  let now = "";
  for (let j = 0; j < arr.length; j++) {
    now += arr[j];
  }
  var answer = Number(now);
  return answer;
}
