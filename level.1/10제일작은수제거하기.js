function solution(arr) {
  let min;

  arr.reduce((prev, curr) => (min = prev > curr ? curr : prev));
  let newArr = arr.filter((i) => i !== min);

  return arr.length <= 1 ? [-1] : newArr;
}
