function solution(record) {
  let answer = [];
  const obj = {};
  for (let i = 0; i < record.length; i++) {
    const [state, uid, name] = record[i].split(" ");
    if (state == "Leave") {
      answer.push([uid, "님이 나갔습니다."]);
      continue;
    }
    if (state == "Enter") {
      answer.push([uid, "님이 들어왔습니다."]);
    }
    obj[uid] = name;
  }
  return answer.map((el) => obj[el[0]] + el[1]);
}
