function countSubstrings(s: string, c: string): number {
  let count = 0;
  let results = 0;
  for (let i = 0; i < s.length; i++) {
    const element = s[i];

    if (element === c) {
      count += results + 1;
      results++;
    }
  }
  return count;
}

countSubstrings("abada", "a");
