export function removeDuplicate(arr: number[]) {
  let i = 0;

  for (let j = i; j < arr.length; j++) {
    const element = arr[j];

    if (arr[i] !== element) {
      arr[i + 1] = element;
      i++;
    }
  }
  console.log("Remove Duplicate >>", arr);
  return i + 1;
}

// [1, 1, 2, 2, 3, 4, 4, 5, 5]
