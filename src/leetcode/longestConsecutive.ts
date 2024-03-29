/* TODO: Most asked question in an interview */

function linearSearch(nums: number[], target): boolean {
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element === target) return true;
  }
  return false;
}

export function longestConsecutive(nums: number[]): number {
  let longest = 1;
  for (let i = 0; i < nums.length; i++) {
    let element = nums[i];
    let count = 1;
    while (linearSearch(nums, element + 1)) {
      element = element + 1;
      count += 1;
    }
    longest = count;
  }

  return longest;
}

export function longestConsecutiveOptimal(nums: number[]): number {
  // first we have to sort the array in order to calculate the longest value

  for (let index = 0; index < nums.length; index++) {
    let lowest = index;

    for (let j = index + 1; j < nums.length; j++) {
      if (nums[j] < nums[lowest]) {
        lowest = j;
      }
    }
    if (index !== lowest)
      [nums[index], nums[lowest]] = [nums[lowest], nums[index]];
  }
  let longest = 1,
    count = 0,
    lastSmallest = 0;

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (nums[i] - 1 === lastSmallest) {
      count += 1;
      lastSmallest = element;
    } else if (nums[i] !== lastSmallest) {
      count = 1;
      lastSmallest = element;
    }
    longest = Math.max(longest, count);
  }
  return longest;
}
