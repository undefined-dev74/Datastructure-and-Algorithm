export const maxFrequencyElement = (nums: number[]): number => {
  let maxFrequency = 0;

  const array = Array.from({ length: 101 }).fill(0);
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];

    array[element] = ++array[element] || 1;

    console.log("ARRAY", array);
    maxFrequency = Math.max(maxFrequency, array[element]);
  }

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
    if (element > 1) count += element - 1;
  }
  console.log("Count", maxFrequency);

  return maxFrequency;
};
