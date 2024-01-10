export const unionIntersection = (nums: number[], nums2: number[]) => {
  const intersection: number[] = [];

  let i = 0;
  let j = 0;

  while (i < nums.length && j < nums2.length) {
    if (nums[i] < nums2[j]) {
      i++;
    } else if (nums2[j] < nums[i]) {
      j++;
    } else {
      intersection.push(nums[i]);
      i++;
      j++;
    }
  }

  return intersection;
};
