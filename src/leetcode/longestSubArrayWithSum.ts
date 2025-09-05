export const longestSubArrayWithSum = (nums: number[], sum: number): number => {
  let length = 0;
  for (let i = 0; i < nums.length; i++) {
    let total = 0;
    for (let j = i; j < nums.length; j++) {
      total += nums[j];

      if (sum === total) length = Math.max(length, j - i + 1);
    }
  }
  return length;
};

export const betterLongestSubWithSum = (nums: number[], k: number): number => {
  let sum = 0;
  let maxLength = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum === k) maxLength = Math.max(maxLength, i + 1);
  }
  return maxLength;
};

export const twoPointerLongestWithSum = (nums: number[], k: number): number => {
  let sum = nums[0];
  let left = 0,
    right = 0;
  let maxLength = 0;

  while (right < nums.length) {
    while (left <= right && sum > k) {
      sum -= nums[left];
      left++;
    }
    if (sum === k) maxLength = Math.max(maxLength, right - left + 1);
    right++;
    if (right < nums.length) sum += nums[right];
  }
  return maxLength;
};
