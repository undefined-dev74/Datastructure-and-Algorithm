export const reverseInteger = function (x: number): number {
  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);
  let revN = 0;
  while (x !== 0) {
    const lastDigit = x % 10;
    revN = revN * 10 + lastDigit;
    x = x > 0 ? Math.floor(x / 10) : Math.ceil(x / 10);
  }
  return revN;
};
