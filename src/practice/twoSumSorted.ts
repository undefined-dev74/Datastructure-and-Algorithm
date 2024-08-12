export const twoSumSorted = (numbers: number[], target: number): number[] => {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left, right];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
  return [];
};
// this is the best optimized solution for twoSumSorted
// Time Complexity: O(n)    Space Complexity: O(1)  where n is the length of the input array
