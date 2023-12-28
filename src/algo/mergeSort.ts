export const mergeSort = (arr: number[]) => {
  // base case
  if (arr.length <= 1) return arr;
  const mid: number = Math.floor(arr.length / 2);
  const left: number[] = mergeSort(arr.slice(0, mid));
  const right: number[] = mergeSort(arr.slice(mid));

  console.log(left, right);
  return merge(left, right);
};

// two sorted array  as parameter
// @param arr1 = [1, 8, 6, 20]
// @param arr2 = [12, 7, 59, 5]
export function merge(arr1: number[], arr2: number[]) {
  const results: number[] = [];

  let left = 0;
  let right = 0;

  while (left < arr1.length && right < arr2.length) {
    if (arr2[right] > arr1[left]) {
      results.push(arr1[left]);
      left++;
    } else {
      results.push(arr2[right]);
      right++;
    }
  }

  while (left < arr1.length) {
    results.push(arr1[left]);
    left++;
  }
  while (right < arr2.length) {
    results.push(arr2[right]);
    right++;
  }
  console.log(results);
  return results;
}
