// Helper function to get the digit at a specific position
function getDigits(nums: number, digits: number) {
  // Get the digit at the specified position using Math.pow and modulo
  return Math.floor(Math.abs(nums) / Math.pow(10, digits)) % 10;
}

// Helper function to count the number of digits in a number
function digitCount(nums: number) {
  // If the number is 0, it has 1 digit; otherwise, use log10 to count digits
  if (nums === 0) return 1;
  return Math.floor(Math.log10(Math.abs(nums))) + 1;
}

// Helper function to find the maximum number of digits in an array of numbers
function mostDigits(nums: number[]) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    // Update maxDigits with the maximum digit count in the array
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// Main Radix Sort function
export function radixSort(arr: number[]) {
  // Find the maximum number of digits in the array
  const mostDigitsCount = mostDigits(arr);

  // Iterate through each digit position (from right to left)
  for (let k = 0; k < mostDigitsCount; k++) {
    // Create an array of buckets for each digit (0 to 9)
    const digitsBucket = Array.from({ length: 10 }, () => []);

    // Distribute elements into buckets based on the current digit position
    for (let i = 0; i < arr.length; i++) {
      const digit = getDigits(arr[i], k);
      digitsBucket[digit].push(arr[i]);
    }

    // Concatenate the buckets to get the new order of the array
    arr = [].concat(...digitsBucket);

    // Log the state of buckets for each digit position
    console.log(digitsBucket);
  }

  // Log the final sorted array
  console.log(arr);

  // Return the sorted array
  return arr;
}

// Example usage:
radixSort([18, 232, 4, 332, 23425, 5232, 52321, 423, 421, 3234, 13]);
