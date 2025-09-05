function findMaxLength(nums: number[]): number {
  const numbers: Record<string, number> = {};

  let results = 0;
  let currentSum = 0;
  numbers[0] = -1;
  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i] === 1 ? 1 : -1;

    if (numbers.hasOwnProperty(currentSum)) {
      results = Math.max(results, i - numbers[currentSum]);
    } else {
      numbers[currentSum] = i;
    }
    console.log(numbers);
    // console.log(currentSum);
  }

  return results;
}

console.log(findMaxLength([0, 0, 1, 0, 0, 0, 1, 1]));
