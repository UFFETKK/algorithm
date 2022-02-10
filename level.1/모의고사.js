function solution(answers) {
  let a = [1, 2, 3, 4, 5];
  let b = [2, 1, 2, 3, 2, 4, 2, 5];
  let c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let obj = [0, 0, 0];
  let result = [];

  for (let i = 0; i < answers.length; i++) {
    if (a[i % 5] === answers[i]) obj[0]++;
    if (b[i % 8] === answers[i]) obj[1]++;
    if (c[i % 10] === answers[i]) obj[2]++;
  }
  const max = Math.max(...obj);
  for (let k = 0; k < obj.length; k++) {
    if (obj[k] === max) {
      result.push(k + 1);
    }
  }
  return result;
}
