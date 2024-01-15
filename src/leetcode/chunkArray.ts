type ChunkedArray = Array<number[]>;
export const chunkArray = (nums: number[], chunkSize: number): ChunkedArray => {
  if (nums.length === 0) return [];

  const firstChunk = nums.slice(0, chunkSize);
  const remainingChunks = chunkArray(nums.slice(chunkSize), chunkSize);
  return [firstChunk, ...remainingChunks];
};

// [1,9,6,3,2]
