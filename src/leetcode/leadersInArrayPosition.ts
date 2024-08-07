export function leadersInArrayPosition(nums: number[]): number[] {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    let leader = true;

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        leader = false;
        break;
      }
    }
    if (leader) result.push(nums[i]);
  }
  return result;
}
