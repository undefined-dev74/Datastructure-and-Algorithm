export function armstrongNumber(n: number): boolean {
  let sum = 0;
  const duplicate = n;
  const pow = Math.round(Math.log10(n) + 1);

  while (n !== 0) {
    const lastDigit = n % 10;
    sum += lastDigit ** pow;
    console.log(sum);
    n = Math.floor(n / 10);
  }

  return duplicate === sum;
}
