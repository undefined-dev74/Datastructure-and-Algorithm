import { swap } from "~/utils/swap";

export const quickSort = (
  arr: number[],
  left: number,
  right: number = arr.length - 1
) => {
  if (left < right) {
    const pivotIdx = pivot(arr, left, right);

    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, right);
  }
  console.log(arr);
  return arr;
};

function pivot(arr: number[], startIdx: number = 0, endIdx: number = 0) {
  const pivot = arr[startIdx];
  let swapIdx = startIdx;

  for (let i = startIdx; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, startIdx, swapIdx);
  return swapIdx;
}
