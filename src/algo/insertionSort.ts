/**
 * Performs insertion sort on the given array.
 * @param {number[]} arr - The array to be sorted.
 * @returns {number[]} - The sorted array.
 */

export const insertionSort = (arr: number[]) => {
  // Checking if the array is empty
  if (arr.length === 0) return arr;

  for (let currentIdx = 1; currentIdx < arr.length; currentIdx++) {
    const currentElement = arr[currentIdx];
    let comparingIdx = currentIdx - 1;

    while (comparingIdx >= 0 && arr[comparingIdx] > currentElement) {
      arr[comparingIdx + 1] = arr[comparingIdx];
      comparingIdx--;
    }

    arr[comparingIdx + 1] = currentElement;
  }
  console.log(arr);
  return `Insertion Sort ${arr}`;
};
