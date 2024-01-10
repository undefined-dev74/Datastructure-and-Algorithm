export const findMissingNumber = (nums: number[]) => {
  const hash = Array.from({ length: nums.length + 1 }).fill(0);
  console.log({ hash });
  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = i;
  }

  for (let j = 0; j < nums.length; j++) {
    if (hash[j] === 0) {
      return j;
    }
  }
  console.log(hash);
};
