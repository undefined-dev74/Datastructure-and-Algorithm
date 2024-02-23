/**
 Do not return anything, modify nums1 in-place instead.
 */
export function mergeTwoSortedArrays(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  let left = m - 1;
  let right = n - 1;
  let mergeIndex = m + n - 1;

  while (left >= 0 && right >= 0) {
    if (nums2[right] > nums1[left]) {
      nums1[mergeIndex] = nums2[right];
      right--;
    } else {
      nums1[mergeIndex] = nums1[left];
      left--;
    }
    mergeIndex--;
  }
  while (right >= 0) {
    nums1[mergeIndex] = nums2[right];
    right--;
    mergeIndex--;
  }

  console.log("MERGE TWO SORTED ARRAY", left, right);
  console.log("Array", nums1, nums2);
  console.log("MERGE INDEX", mergeIndex);
}
