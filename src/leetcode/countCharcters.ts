export function countCharacters(words: string[], chars: string): number {
  const charMap: Record<string, number> = {};
  let count = 0;

  // Count the occurrences of each character in `chars`
  for (const char of chars) {
    charMap[char] = (charMap[char] || 0) + 1;
  }

  // Iterate over each word
  for (const word of words) {
    const wordCharMap: Record<string, number> = {};

    // Count the occurrences of each character in the word
    for (const char of word) {
      wordCharMap[char] = (wordCharMap[char] || 0) + 1;
    }

    let canBeFormed = true;

    // Check if the word can be formed by the characters in `chars`
    for (const char in wordCharMap) {
      if (!charMap[char] || wordCharMap[char] > charMap[char]) {
        canBeFormed = false;
        break;
      }
    }

    // If the word can be formed, add its length to the count
    if (canBeFormed) {
      count += word.length;
    }
  }

  return count;
}
