// brute force approach
export const unionOfSortedArray = (arr1: number[], arr2: number[]) => {
  const unique = new Set();
  for (let idx1 = 0; idx1 < arr1.length; idx1++) {
    const element = arr1[idx1];
    unique.add(element);
  }
  for (let idx2 = 0; idx2 < arr2.length; idx2++) {
    unique.add(arr2[idx2]);
  }

  return Array.from(unique);
};
