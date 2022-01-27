function solution(a, b) {
  let date = String(new Date(`2016,${a},${b}`));
  let day = date.split(" ");
  return day[0].toUpperCase();
}
