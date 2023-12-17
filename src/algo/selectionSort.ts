export const selection_sort = (arr: number[]) => {
  for (let i = 0; i <= arr.length - 2; i++) {
    // Store the minimum value
    let min = i;
    for (let j = i + 1; j <= arr.length - 1; j++) {
      // checks the two value in which is min
      if (arr[j] < arr[min])
        // and assign the min index to min variable
        min = j;
    }

    const temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
  console.log(arr);
  return `Selection Sort ${arr}`;
};
