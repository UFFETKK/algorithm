function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (var i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

//참가자와 완주자를 정렬하고 i번째 참가자와 완주자가 다를경우 i번째 참가자들을 리턴
