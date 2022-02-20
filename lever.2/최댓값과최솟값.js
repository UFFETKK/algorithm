function solution(s) {
  var answer = "";
  let arr = s.split(" ");
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    arr2.push(Number(arr[i]));
  }
  arr2.sort(function (a, b) {
    return a > b ? 1 : -1;
  });
  answer += String(arr2[0]) + " ";
  answer += String(arr2[arr2.length - 1]);
  return answer;
}
