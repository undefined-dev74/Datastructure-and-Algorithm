/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

export const singleNumber = (nums: number[]): number => {
  const obj: Record<string, number> = {};
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    obj[element] = ++obj[element] || 1;
  }
  console.log(obj);
  for (const key in obj) {
    if (obj[key] === 1) return parseInt(key);
  }
  return 0;
};
