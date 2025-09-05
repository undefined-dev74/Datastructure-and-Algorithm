const threeSumClosest = (nums: number[], target: number): number => {
  let closest = Infinity; // first we will define it as infinity, since we have to find the closest sum
  // step 1: sort the array
  nums.sort((a, b) => a - b);
  // step 2: iterate through the array
  // we will iterate till the 3rd last element, since we have to find the sum of 3 element
  // left pointer will be i + 1, since i will be the first element starting from 0th index
  for (let i = 0; i < nums.length - 2; i++) {
    // step 3: define left and right pointer
    // right pointer will be the last element
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      // step 4: find the sum of 3 elements
      const sum = nums[i] + nums[left] + nums[right];
      if (Math.abs(target - sum) < Math.abs(target - closest)) {
        // if the sum is closer to the target than the closest sum
        closest = sum; // update the closest sum
      }
      if (sum < target) {
        left++;
      } else right--;
    }
  }
  return closest;
};

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(threeSumClosest(nums, 20)); // 21

// Time Complexity: O(n^2) - n is the length of the input array
// Space Complexity: O(1) - no extra space is used
