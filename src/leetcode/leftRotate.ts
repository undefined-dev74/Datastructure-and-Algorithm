import { swap } from "~/utils/swap";

export function leftRotate(nums: number[]) {
  const temp = nums[0];
  const n = nums.length;
  for (let i = 1; i < n; i++) {
    nums[i - 1] = nums[i];
  }
  nums[n - 1] = temp;
  console.log(nums);
}

export function rotate(nums: number[], k: number) {
  //   const spliced = nums.slice(nums.length - k, k);
  //   console.log("Slicing", nums.splice(nums.length - k, k).concat(nums));
  //   //   console.log("original Array", nums.splice(nums.length - k, k).concat(nums));
  const temp = [];
  for (let i = 0; i < k; i++) {
    temp[i] = nums[i];
  }
  console.log(temp);
  for (let j = k + 1; j >= k; j--) {
    console.log(nums[j]);
    temp.unshift(nums[j]);
  }
  console.log("NUMS<>", (nums = temp));
}

rotate([-1, -100, 3, 99], 2);

// Brute force approach
export function rotateLeftByDElement(nums: number[], d: number) {
  const n = nums.length;
  const temp = nums.slice(0, d);

  // shifting
  for (let i = d; i < n; i++) {
    nums[i - d] = nums[i];
  }

  let j = 0;
  for (let k = n - d; k < n; k++) {
    nums[k] = temp[j];
    j++;
  }
  console.log("ROTATE ELEMENT D", nums);
}

// optimal solution

function reverse(arr: number[], start: number, end: number) {
  while (start <= end) {
    swap(arr, start, end);
    start++;
    end--;
  }
}

export function rotateLeftByDElementOptimal(arr: number[], k: number) {
  const n = arr.length;
  // reverse first n- k element
  reverse(arr, 0, n - k - 1);
  reverse(arr, n - k, n - 1);
  reverse(arr, 0, n - 1);

  console.log("rotateLeftByDElementOptimal", arr);
}
