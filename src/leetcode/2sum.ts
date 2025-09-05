/* 
this is brute force approach with On2 time complexity
space complexity will be On since we are not taking any extra variable
*/
export const twoSum = (nums: number[], target: number) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

/* 

*/

// Hashing method

export const hashingTwoSum = (nums: number[], target: number): number[] => {
  const objMap: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    objMap[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (objMap.hasOwnProperty(complement) && objMap[complement] !== i) {
      return [i, objMap[complement]];
    }
  }
  return [];
};

// TWO POINTER APPROACH
/* 
In two pointer approach the array has to be sorted
*/

export const twoPointerSum = (nums: number[], target: number): number[] => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum == target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
};
