const arr = [1, 2, 3, 4, 2, 5, 6, 2, 8, 5, 9, 8];
const map: Record<number, number> = {};

const countAndPrintDuplicates = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = ++map[arr[i]] || 1;
  }
  for (const [key, value] of Object.entries(map)) {
    if (value > 1) {
      console.log(`${key}: Occurs: ${value} times`);
    }
  }
};

countAndPrintDuplicates(arr);

export default countAndPrintDuplicates;
