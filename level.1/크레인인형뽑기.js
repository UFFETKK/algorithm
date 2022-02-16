function solution(board, moves) {
  let arr = [];
  let count = 0;
  moves.forEach((move) => {
    for (let i = 0; i < board.length; i++) {
      const temp = board[i][move - 1];
      if (temp === 0) continue;
      if (temp === arr[arr.length - 1]) {
        arr.pop();
        count += 2;
      } else {
        arr.push(temp);
      }
      board[i][move - 1] = 0;
      break;
    }
  });
  return count;
}
