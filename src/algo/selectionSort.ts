export const selection_sort = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    // Store the minimum value
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      // checks the two value in which is lowest
      // [14, 8, 1, 5, 19]
      //lowest is 14 since loop first start
      // comparing it with 8 which is j+1
      if (arr[j] < arr[lowest])
        // and assign the lowest index to lowest variable
        lowest = j;
    }

    if (i !== lowest) [arr[lowest], arr[i]] = [arr[i], arr[lowest]];
  }
  console.log("SELECTION SORT", arr);
  return `Selection Sort ${arr}`;
};
