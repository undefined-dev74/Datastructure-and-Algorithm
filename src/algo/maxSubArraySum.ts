// Naive approach, O(N^2)
export const maxSubArraySum = (arr: number[], count: number) => {
  if (arr.length === 0 || arr.length < count) return null;

  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    let temp = 0;
    for (let j = 0; j < count; j++) {
      temp += arr[i + j + 1];
    }
    if (temp > max) max = temp;
  }
  return max;
};
// Sliding window approach
const maxSubarraySum = (arr: number[], nums: number) => {
  let tempSum = 0;
  let maxSum = 0;

  for (let i = 0; i < nums; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = 0; i < arr.length; i++) {
    tempSum = tempSum - arr[i - nums] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
};
