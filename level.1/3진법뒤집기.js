function solution(n) {
  let b = n.toString(3).split("").reverse().join("");
  return parseInt(b, 3);
}
