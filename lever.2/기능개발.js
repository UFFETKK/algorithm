function solution(pro, speeds) {
  var answer = [];
  let arr = [];
  for (let i = 0; i < pro.length; i++) {
    if ((100 - pro[i]) % speeds[i] === 0) {
      arr.push((100 - pro[i]) / speeds[i]);
    } else arr.push(parseInt((100 - pro[i]) / speeds[i]) + 1);
  }
  let z = 1,
    max = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[max] >= arr[i]) {
      z++;
    } else {
      answer.push(z);
      max += z;
      z = 1;
    }
    if (i == arr.length - 1) {
      answer.push(z);
    }
  }

  return answer;
}
