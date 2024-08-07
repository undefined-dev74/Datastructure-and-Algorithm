export function numberExtraction(number: number, reversed = 0) {
  // Base case: if the number becomes zero, return the reversed number
  if (number === 0) {
    return reversed;
  }

  // Extract the last digit of the number using the modulo operation
  const lastDigit = number % 10;

  console.log({ reversed });
  // Update the reversed number by multiplying it by 10 and adding the last digit
  const newReversed = reversed * 10 + lastDigit;

  // Recursive call with the remaining part of the number (excluding the last digit)
  const remainingNumber = Math.floor(number / 10);

  return numberExtraction(remainingNumber, newReversed);
}
