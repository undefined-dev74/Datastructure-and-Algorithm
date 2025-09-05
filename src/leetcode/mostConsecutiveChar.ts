/**
 * @param {string} s
 * @return {number}
 */
const maxPower = function (s: string): number {
  const str = s.split("");
  console.log(str);
  let i = 0;
  let j = 0;
  let max = 0;
  let temp = 0;
  while (i < str.length && j < str.length) {
    if (str[i] === str[j]) {
      temp++;
      max = Math.max(temp, max);
      j++;
    } else {
      temp = 0;
      i++;
    }
  }
  //   This is On*2
  //   for (let i = 0; i < str.length; i++) {
  //     for (let j = i; j < str.length - 1; j++) {
  //       if (str[i] === str[j]) {
  //         temp++;
  //         max = Math.max(temp, max);
  //       } else temp = 0;
  //     }
  //   }
  console.log("most character", max);
  return max;
};
export default maxPower;
