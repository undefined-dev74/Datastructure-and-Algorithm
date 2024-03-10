// Naive approach - Approach 1
// Space complexity O(n)
// Time complexity O(m + n)
export function arraysIntersection(nums1: number[], nums2: number[]) {
  const results: number[] = [];
  const set1 = new Set(nums1);

  for (let i = 0; i < nums2.length; i++) {
    if (set1.has(nums2[i])) {
      results.push(nums2[i]);
      set1.delete(nums2[i]);
    }
  }

  return results;
}
