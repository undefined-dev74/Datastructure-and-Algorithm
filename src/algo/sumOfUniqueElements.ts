// Using frequency counter approach
export const sum_of_unique_elements = (arr: number[]) => {
  if (arr.length === 0) return 0;

  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    const element: number = arr[i];
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    obj[element] = ++obj[element] || 1;
  }

  let sum = 0;

  for (const key in obj) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (Object.prototype.hasOwnProperty.call(obj, key) && obj[key] === 1) {
      sum += parseInt(key, 10);
    }
  }
  return sum;
};
