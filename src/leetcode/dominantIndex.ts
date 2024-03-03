export function dominantIndex(nums: number[]): number {
  let max = 0;
  let maxIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];

    if (element > max) {
      max = element;
      maxIndex = i;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (i !== maxIndex && max < nums[i] * 2) {
      return -1;
    }
  }

  return maxIndex;
}
