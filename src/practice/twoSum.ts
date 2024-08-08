export const twoSum = (nums: number[], target: number): number[] => {
  let left = 0;
  let right = left + 1;
  const result = [];
  while (left < nums.length) {
    if (nums[left] + nums[right] === target) {
      result.push(left, right);
      break;
    } else if (right >= nums.length) {
      left++;
      right = left + 1;
    } else right++;
  }
  return result;
};

export const twoSumOptimized = (nums: number[], target: number): number[] => {
  const map = new Map();
  console.log("MAP", map);
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(nums[i], i);
  }
  return [];
};
