/* 
This approach is brute force approach
where Time Complexity is O(2n) and with no Space complexity
*/
export const sortArrayOfZeronOnes = (nums: number[]) => {
  const objMap: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    objMap[element] = ++objMap[element] || 1;
  }

  let index = 0;

  for (let i = 0; i < objMap[0]; i++) {
    nums[index++] = 0;
  }

  for (let i = 0; i < objMap[1]; i++) {
    nums[index++] = 1;
  }
  for (let i = 0; i < objMap[2]; i++) {
    nums[index++] = 2;
  }

  //   return temp;
};

export const dnfSortArrayOfZeronOnes = (nums: number[]): number[] => {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    if (nums[low] === 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
  return nums;
};
