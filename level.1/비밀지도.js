function solution(n, arr1, arr2) {
  var answer = [];
  for (let i = 0; i < n; i++) {
    let arr1item = arr1[i].toString(2).padStart(n, 0);
    let arr2item = arr2[i].toString(2).padStart(n, 0);
    let sum = "";
    for (let z = 0; z < n; z++) {
      if (arr1item[z] === "1" || arr2item[z] === "1") {
        sum += "#";
      } else {
        sum += " ";
      }
    }
    answer.push(sum);
  }
  return answer;
}

//str.padStart(targetLength, [,padString]) 메서드는 현재 문자열의 시작을 다른 문자열로 채워,
//주어진 길이를 만족하는 새 문자열반환. 채워넣기는 대상 문자열의 왼쪽부터 적용.
//'abc'.padStart(10, "foo");  // "foofoofabc"
//'abc'.padStart(6,"123465"); // "123abc"
//우측부터 채우는건 padEnd()
