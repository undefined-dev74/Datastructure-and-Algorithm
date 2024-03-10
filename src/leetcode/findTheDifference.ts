/* 
Approach 1
Where we are using O(n) in space complexity
and O(n) in time complexity
*/
export function findTheDifference1(s: string, t: string): string {
  // Initialize sum variables for both strings
  let sum = 0; // O(1) space
  let otherSum = 0; // O(1) space

  // Iterate through string 's' to calculate the sum of ASCII values
  for (let i = 0; i < s.length; i++) {
    console.log(s.charCodeAt(i));
    sum += s.charCodeAt(i); // O(n) time
  }

  // Iterate through string 't' to calculate the sum of ASCII values
  for (let i = 0; i < t.length; i++) {
    console.log(t.charCodeAt(i));
    otherSum += t.charCodeAt(i); // O(m) time
  }

  // Calculate the difference between the sums
  const difference = otherSum - sum; // O(1) time

  // Convert the ASCII difference to the corresponding character and return
  return String.fromCharCode(difference); // O(1) time
}

/* 
Space Complexity:
O(1) space for individual variables (sum, otherSum, difference).
Time Complexity:
O(n) for the loop over string 's'.
O(m) for the loop over string 't'.
The dominant term is the loop over the longer string, so the overall time complexity is O(max(n, m)).
*/

export function findTheDifference(s: string, t: string): string {
  const map: Record<string, number> = {};

  for (const char of s) {
    map[char] = ++map[char] || 1;
  }
  console.log(map);
  for (const char of t) {
    if (Object.prototype.hasOwnProperty.call(map, char)) {
      // If the character is not present in the decrease the count
      map[char]--;
      if (Object.prototype.hasOwnProperty.call(map, char)) {
        const element = map[char];
        if (element < 0) return char;
      }
      //   return char;
    } else {
      return char;
    }
  }

  //   flow will never come here
  return "";
}
