const threeSumClosest = (nums: number[], target: number): number => {
  let closest = Infinity;
  nums.sort((a, b) => a - b);

  for (let k = 0; k < nums.length - 2; k++) {
    let i = k + 1;
    let j = nums.length - 1;

    while (i < j) {
      const sum = nums[k] + nums[i] + nums[j];

      if (Math.abs(target - sum) < Math.abs(target - closest)) {
        closest = sum;
      }

      if (sum < target) {
        i++;
      } else {
        j--;
      }
    }
  }
  return closest;
};

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(threeSumClosest(nums, 20)); // 21

// Time Complexity: O(n^2) - n is the length of the input array
// Space Complexity: O(1) - no extra space is used
