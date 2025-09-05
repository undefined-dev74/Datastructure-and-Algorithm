import { swap } from "../utils/swap";

export const recursiveBubbleSort = (arr: number[], n = arr.length) => {
  if (n == 1) return;

  for (let i = 0; i <= n - 2; i++) {
    if (arr[i] > arr[i + 1]) {
      swap(arr, i, i + 1);
    }
  }
  recursiveBubbleSort(arr, n - 1);
  return arr;
};
