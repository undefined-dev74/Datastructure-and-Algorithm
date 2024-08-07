export const findSpecialInteger = function (arr: number[]) {
  const objMap: Record<string, number> = {};
  for (let i = 0; i < arr.length; i++) {
    objMap[arr[i]] = ++objMap[arr[i]] || 1;
  }
  let max = 0;
  let keyWithMaxValue = null; // Variable to store the key with the maximum value
  for (const key in objMap) {
    if (objMap[key] > max) {
      max = objMap[key];
      keyWithMaxValue = key;
    }
  }

  return keyWithMaxValue;
};
