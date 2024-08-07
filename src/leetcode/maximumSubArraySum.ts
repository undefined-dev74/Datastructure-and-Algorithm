/* 
Kadane's algorithm of maximum sub array sum
*/
export const maximumSubArraySum = (nums: number[]) => {
  let sum = 0;
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    max = Math.max(sum, max);
    if (sum < 0) sum = 0;
  }
  return max;
};
