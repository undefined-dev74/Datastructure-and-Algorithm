export function customSortString(order: string, s: string): string {
  let result = "";

  for (let i = 0; i < order.length; i++) {
    const element = order[i];

    if (s.includes(element)) {
      let count = s.split(element).length - 1;
      if (count > 0) {
        while (count > 0) {
          result += element;
          count--;
        }
      }
      s = s.split(element).join("");
    }
  }
  console.log("dsd", result);
  return (result += s);
}
