function solution(s) {
  return (
    s.length === (4 || 6) && s.split("").every((x) => (isNaN(x) ? false : true))
  );
}
//길이가 4 혹은 육이며 (s의 각 x가 isNaN true 이면 false)
// 둘다 true 여야 true 반환
