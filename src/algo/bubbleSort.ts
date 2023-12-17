export const bubble_sort = (arr: number[]) => {
  // Outer loop
  const n = arr.length;
  for (let i = n - 1; i >= 1; i--) {
    // Nothing fancy, just looping in reverse order
    let swap = 0;
    // Inner loop run from start to end
    for (let j = 0; j <= i - 1; j++) {
      // checking if first element is greater than next one
      if (arr[j] > arr[j + 1]) {
        // Swapping the value position
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        swap = 1;
      }
    }
    /* Checking if array is already sorted
     and their is no need to swap
    breaking the loop and no need to iterate over the array
    */
    if (swap === 0) break;
  }

  return arr;
};
