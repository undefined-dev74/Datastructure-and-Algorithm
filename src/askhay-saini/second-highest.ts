export function secondHighest(s: string): number {
  const numbers = s.split("").filter((val) => !isNaN(Number(val)));
  if (numbers.length === 0) return -1;
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < numbers.length; i++) {
    const num = Number(numbers[i]);
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num < largest && num > secondLargest) {
      secondLargest = num;
    }
  }
  return secondLargest === -Infinity ? -1 : secondLargest;
}
