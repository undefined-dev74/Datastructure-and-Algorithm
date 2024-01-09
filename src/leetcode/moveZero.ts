import { swap } from "~/utils/swap";

// Brute force solution
export const moveZero = (nums: number[]) => {
  const temp = [];
  /*   Checking if array contains any zero value
   * if any zero exist we not run the function
   */
  if (!nums.includes(0)) return false;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) temp.push(nums[i]);
  }

  for (let j = 0; j < temp.length; j++) {
    nums[j] = temp[j];
  }
  for (let i = temp.length; i < nums.length; i++) {
    nums[i] = 0;
  }
  console.log(nums);
};

// Optimal solution using two pointer approach
export const optimalMoveZero = (nums: number[]) => {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      swap(nums, i, j);
      j++;
    }
  }
  console.log(nums);
};
