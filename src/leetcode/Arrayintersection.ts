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

import { binarySearch } from "~/algo/binarySearch";

/* 
Approach 2
*/

export function arraysIntersection(nums1: number[], nums2: number[]) {
  const results: number[] = [];

  for (let i = 0; i < nums2.length; i++) {
    if (binarySearch(nums1, nums2[i])) {
      results.push(nums2[i]);
    }
  }

  return Array.from(new Set(results));
}

// export function arraysIntersection(nums1: number[], nums2: number[]) {
//   const results: number[] = [];
//   let left = 0,
//     right = 0;

//   /* First we will sort both of arrays */
//   nums1.sort((a, b) => a - b);
//   nums2.sort((a, b) => a - b);

//   while (left < nums1.length && right < nums2.length) {
//     if (nums1[left] === nums1[left]) {
//       results.push(nums2[right]);
//       left++;
//       right++;
//     } else if (nums1[left] < nums2[right]) {
//       left++;
//     } else {
//       right++;
//     }
//   }
//   console.log("RESULTS", results);

//   return results;
// }
