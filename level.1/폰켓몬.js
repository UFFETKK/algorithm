function solution(nums) {
  var answer = [];
  let n = nums.length / 2;
  for (let i = 0; i < nums.length; i++) {
    if (!answer.includes(nums[i])) answer.push(nums[i]);
  }
  return n <= answer.length ? n : answer.length;
}
