export const binarySearch = (arr: number[], target: number) => {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (arr[middle] !== target && left <= right) {
    if (arr[middle] < target) left = middle + 1;
    else right = middle - 1;

    // update middle pointer,
    // otherwise middle will be static
    middle = Math.floor((left + right) / 2);
  }

  return arr[middle] === target ? middle : -1;
  //   if nothing found, return -1 since the element doesn't exists in the array
};

// binarySearch([1, 2, 3, 5, 6, 9, 15, 19], 9);

// [1, 2, 3, 5, 6, 9, 15, 19]
//  l        m             r

export const binarySearchExtended = (
  nums: number[],
  target: number
): number => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) left = left + 1;
    else right = mid - 1;
  }

  return -1;
};
