/**
 * @param {string} s
 * @return {number}
 */
export const lengthOfLongestSubstring = (str: string) => {
  const charSet = new Set();
  let left = 0;
  let result = 0;

  for (let i = 0; i < str.length; i++) {
    console.log("dsd", charSet.has(str[i]));
    while (charSet.has(str[i])) {
      charSet.delete(str[left]);
      left += 1;
    }
    charSet.add(str[i]);
    result = Math.max(result, i - left + 1);
  }
  return result;
};
