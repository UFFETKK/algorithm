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

//s를 전부 대문자화해서 p와 y의 갯수를 카운트하고
//그 갯수가 같다면 return true or false
