// we will assume that array is sorted
export function secondLargestElement(arr: number[]) {
  // adding base case arr.length = 0 return
  if (arr.length < 1) return arr[0];
  let largest = arr[0];
  let sLargest = arr[0];
  // first loop to find largest element in the array
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) largest = arr[i];
  }

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > sLargest && arr[j] != largest) sLargest = arr[j];
  }
  return sLargest;
}
