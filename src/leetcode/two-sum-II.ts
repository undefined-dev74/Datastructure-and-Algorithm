function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = left + 1;

  while (left < numbers.length) {
    console.log("IN WHILE LOOP");
    if (numbers[left] + numbers[right] === target) {
      return [left + 1, right + 1];
    }
    right++;
    if (right > numbers.length || numbers[left] + numbers[right] !== target) {
      left++;
      right = left + 1;
    }
  }

  return [-1, -1];
}
// TODO: Passing only 14/24 of test cases

console.log(twoSum([3, 24, 50, 79, 88, 150, 345], 200));
