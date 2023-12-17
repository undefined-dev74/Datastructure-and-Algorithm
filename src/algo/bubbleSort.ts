export const bubble_sort = (arr: number[]) => {
  // Outer loop
  const n = arr.length;
  for (let i = n - 1; i >= 1; i--) {
    let swap = 0;
    for (let j = 0; j <= i - 1; j++) {
      console.log("inner", arr[j]);
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        swap = 1;
      }
    }
    if (swap === 0) break;
  }
  console.log(arr);
  return arr;
};
