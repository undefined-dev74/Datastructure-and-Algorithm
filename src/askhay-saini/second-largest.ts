export function secondLargest(numbers: number[]): number {
  /* 
     first define two variable with -Infinity because this will be the least number we can compare 
    */
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  // [1,2,3,4,5]

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    // check if the number is greater than first largest update the value
    if (num > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = num;
    } else if (num > secondLargest) {
      secondLargest = num;
    }
  }
  console.log("first largest", firstLargest);
  console.log("second largest", secondLargest);
  return secondLargest;
}
