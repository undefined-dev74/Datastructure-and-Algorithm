/* You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.

You should return the array of nums such that the the array follows the given conditions:

Every consecutive pair of integers have opposite signs.
For all integers with the same sign, the order in which they were present in nums is preserved.
The rearranged array begins with a positive integer.
Return the modified array after rearranging the elements to satisfy the aforementioned conditions. */

/*
Example 1:

Input: nums = [3,1,-2,-5,2,-4]
Output: [3,-2,1,-5,2,-4]
Explanation:
The positive integers in nums are [3,1,2]. The negative integers are [-2,-5,-4].
The only possible way to rearrange them such that they satisfy all conditions is [3,-2,1,-5,2,-4].
Other ways such as [1,-2,2,-5,3,-4], [3,1,2,-2,-5,-4], [-2,3,-5,1,-4,2] are incorrect because they do not satisfy one or more conditions.  
Example 2:

Input: nums = [-1,1]
Output: [1,-1]
Explanation:
1 is the only positive integer and -1 the only negative integer in nums.
So nums is rearranged to [1,-1].
  
 */

// *************** Brute force Approach *****************
export function rearrangeArray(nums: number[]): number[] {
  const results: number[] = [];
  const positive: number[] = [];
  const negative: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element > 0) positive.push(element);
    else negative.push(element);
  }

  for (let i = 0; i < nums.length / 2; i++) {
    results[2 * i] = positive[i];
    results[2 * i + 1] = negative[i];
  }

  return results;
}

// *************** Optimal Approach *****************

export function rearrangeArrayOptimal(nums: number[]): number[] {
  const results: number[] = [];

  let positiveIdx = 0;
  let negativeIdx = 1;

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element > 0) {
      results[positiveIdx] = element;
      positiveIdx += 2;
    } else {
      results[negativeIdx] = element;
      negativeIdx += 2;
    }
  }

  console.log(results);

  return results;
}

// *************** Same question different variations Alternate number *****************

export function rearrangeAlternateNumbers(nums: number[]): number[] {
  const positive: number[] = [];
  const negative: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element > 0) positive.push(element);
    else negative.push(element);
  }

  if (positive.length > negative.length) {
    for (let i = 0; negative.length; i++) {
      nums[i * 2] = positive[i];
      nums[i * 2 + 1] = negative[i];
    }
    let index = negative.length * 2;
    for (let i = negative.length; i < positive.length; i++) {
      nums[index] = positive[i];
      index++;
    }
  } else {
    for (let i = 0; positive.length; i++) {
      nums[i * 2] = positive[i];
      nums[i * 2 + 1] = negative[i];
    }
    let index = positive.length * 2;
    for (let i = positive.length; i < negative.length; i++) {
      nums[index] = negative[i];
      index++;
    }
  }

  return nums;
}
