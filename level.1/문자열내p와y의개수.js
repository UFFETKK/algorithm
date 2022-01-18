function solution(s) {
  var answer = true;
  let Cp = 0;
  let Cy = 0;
  let a = s.toUpperCase();
  for (let i = 0; i < a.length; i++) {
    if (a[i] === "P") Cp += 1;
    if (a[i] === "Y") Cy += 1;
  }

  return Cp == Cy ? answer : false;
}
