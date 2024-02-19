/*
  Time Complexity: O(n)
    - The algorithm iterates through the 'nums' array once.
  
  Space Complexity: O(n)
    - The algorithm uses a hash map ('objMap') to store counts of each element.
    - In the worst case, all distinct elements of 'nums' will be stored in 'objMap'.
*/
export const majorityElements = (nums: number[]): number => {
  const objMap: Record<number, number> = {};

  for (const num of nums) {
    objMap[num] = (objMap[num] || 0) + 1;
    if (objMap[num] > nums.length / 2) {
      return num;
    }
  }
  return 0;
};
