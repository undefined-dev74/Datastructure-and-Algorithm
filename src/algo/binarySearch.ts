export const binarySearch = (arr: number[], num: number) => {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    const middle = Math.floor((min + max) / 2);

    if (arr[middle] < num) {
      min = middle + 1;
    } else if (arr[middle] > num) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  //   if nothing found, return -1 since the element doesn't exists in the array
  return -1;
};
