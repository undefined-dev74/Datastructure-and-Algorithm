export const insertionSort = (arr: number[]) => {
  // Checking if the array is empty
  if (arr.length === 0) return arr;

  for (let i = 1; i < arr.length; i++) {
    const currentElement = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = currentElement;
  }
  console.log(arr);
  return `Insertion Sort ${arr}`;
};
