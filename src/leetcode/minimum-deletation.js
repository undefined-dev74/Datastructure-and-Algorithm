/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumDeletions = function (word, k) {
  let charMap = {};

  for (let i = 0; i < word.length; i++) {
    const element = word[i];
    charMap[element] = ++charMap[element] || 1;

    for (let j = 0; j < word.length; j++) {
      const char = word[j];
      if (word[i] - word[j]) console.log(charMap[char]);
    }
  }

  console.log(charMap);
};

minimumDeletions("aabcaba", 0);
