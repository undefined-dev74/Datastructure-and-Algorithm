export function numJewelsInStones(jewels: string, stones: string): number {
  const strMap: Record<string, number> = {};

  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    const currentStone = stones[i];
    strMap[currentStone] = ++strMap[currentStone] || 1;
  }

  for (let i = 0; i < jewels.length; i++) {
    const currentJewel = jewels[i];

    if (Object.hasOwn(strMap, currentJewel)) {
      count += strMap[currentJewel];
    }
  }

  return count;
}
