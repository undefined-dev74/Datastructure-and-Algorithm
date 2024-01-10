// Optimal solution
export const mostConsecutiveOnes = (nums: number[]): number => {
  // [0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0]
  let max = 0;
  let temp = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      temp++;
      max = Math.max(max, temp);
    } else temp = 0;
  }
  return max;
};
