export const naiveSearch = (longString: string, search: string) => {
  let occurrence = 0;
  for (let i = 0; i < longString.length; i++) {
    for (let j = 0; j < search.length; j++) {
      if (search[j] !== longString[i + j]) break;
      if (j === search.length - 1) {
        occurrence++;
      }
    }
  }
  return occurrence;
};
