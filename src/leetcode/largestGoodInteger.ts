export function largestGoodInteger(num: string): string {
  let maxGoodInteger = "";

  for (let i = 0; i < num.length - 2; i++) {
    const substring = num.substring(i, i + 3);
    console.log(substring);
    if (isGoodInteger(substring) && isLarger(substring, maxGoodInteger)) {
      maxGoodInteger = substring;
    }
  }

  return maxGoodInteger;
}

function isGoodInteger(substring: string): boolean {
  const uniqueDigit = new Set(substring.split(""));

  return uniqueDigit.size === 1;
}

function isLarger(substring: string, currentMax: string): boolean {
  if (currentMax === "") {
    return true;
  }

  return substring > currentMax;
}
