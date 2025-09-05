const reverse = (str: string, idx: number): string => {
  if (idx < 0) {
    return "";
  }
  return str[idx] + reverse(str, idx - 1);
};

export const reverseStringRecursion = (str: string): string => {
  return reverse(str, str.length - 1);
};
