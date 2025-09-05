const factorialOfLargeNumber = (n: number): number[] => {
  const arr: number[] = new Array(10000).fill(0);
  const result: number[] = [];

  const multiply = (
    arr: number[],
    multiplier: number,
    size: number
  ): number => {
    let carry = 0;
    for (let i = 0; i < size; i++) {
      const product = arr[i] * multiplier + carry;
      arr[i] = product % 10;
      carry = Math.floor(product / 10);
    }

    while (carry > 0) {
      arr[size] = carry % 10;
      size++;
      carry = Math.floor(carry / 10);
    }

    return size;
  };

  arr[0] = 1;
  let size = 1;
  for (let multiplier = 2; multiplier <= n; multiplier++) {
    size = multiply(arr, multiplier, size);
  }

  for (let i = size - 1; i >= 0; i--) {
    result.push(arr[i]);
  }

  return result;
};
