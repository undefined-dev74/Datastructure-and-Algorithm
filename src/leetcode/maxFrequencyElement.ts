export const maxFrequencyElement = (nums: number[]): number => {
  let maxFrequency = 0;
  let total = 0;

  const array = Array.from({ length: 101 }).fill(0);

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];

    array[element] = ++array[element] || 1;

    if (maxFrequency < array[element]) {
      maxFrequency = array[element];
      total = maxFrequency;
    } else if (maxFrequency === array[element]) {
      total += maxFrequency;
    }
  }
  console.log("TOTAL", total);

  return maxFrequency;
};
