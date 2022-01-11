function solution(n, m) {
  var answer = [];
  let G = 0;
  let L = 0;

  for (let i = 1; i <= n; i++) {
    if (m % i === 0 && n % i === 0) G = i;
  }

  L = (m * n) / G;

  return (answer = [G, L]);
}
