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
