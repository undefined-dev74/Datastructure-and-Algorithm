export const repeatedSubstringPattern = (s: string) => {
  console.clear();
  const str = s.split("");
  let left = 0,
    right = 1;
  console.log({ str });
  while (left < right && right < str.length) {
    const temp = str.slice(left, right + 1).join("");
    console.log(temp);
    console.log(left, right);
    right++;
    if (temp === str[left] + str[right]) {
      left++;
      return true;
    } else {
      right++;
      return false;
    }
  }
};
