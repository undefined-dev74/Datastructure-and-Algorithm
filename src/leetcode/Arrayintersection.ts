// Naive approach - Approach 1
// Space complexity O(n)
// Time complexity O(m + n)
/* export function arraysIntersection(nums1: number[], nums2: number[]) {
  const results: number[] = [];
  const set1 = new Set(nums1);

  for (let i = 0; i < nums2.length; i++) {
    if (set1.has(nums2[i])) {
        results.push(nums2[i]);
        set1.delete(nums2[i]);
    }
  }

  return results;
} */

/* 
Approach 2
*/

// export function arraysIntersection(nums1: number[], nums2: number[]) {
//   const results: number[] = [];

//   for (let i = 0; i < nums2.length; i++) {
//     if (binarySearch(nums1, nums2[i])) {
//       results.push(nums2[i]);
//     }
//   }

//   return Array.from(new Set(results));
// }

export function arraysIntersection(nums1: number[], nums2: number[]) {
  const results: number[] = [];

  /* First we will sort both of arrays */
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let i = 0,
    j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums1[i]) {
      results.push(nums2[j]);
      while (i < nums1.length - 1 && nums1[i] === nums1[i + 1]) i++;
      while (j < nums2.length - 1 && nums2[j] === nums2[j + 1]) j++;
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }
  console.log("RESULTS", results);

  return results;
}
