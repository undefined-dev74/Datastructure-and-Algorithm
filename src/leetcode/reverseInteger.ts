export const reverseInteger = function (x: number): number {
  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);
  let rev = 0;
  while (x !== 0) {
    const lastDigit = x % 10;
    x = Math.trunc(x / 10);

    if (rev > INT_MAX / 10 || (rev === INT_MAX / 10 && lastDigit > 7)) {
      return 0; // Overflow, return 0
    }
    if (rev < INT_MIN / 10 || (rev === INT_MIN / 10 && lastDigit < -8)) {
      return 0; // Overflow, return 0
    }

    rev = rev * 10 + lastDigit;
  }
  return rev;
};
