type ChunkedArray = Array<number[]>;
export const chunkArray = (nums: number[], chunkSize: number): ChunkedArray => {
  if (nums.length === 0) return [];

  const chunk = nums.slice(0, chunkSize);

  return [chunk, ...chunkArray(nums.slice(chunkSize), chunkSize)];
};

// [1,9,6,3,2]
