export function minimumLength(string: string) {
  let left = 0,
    right = string.length - 1;

  while (left < right && string[left] == string[right]) {
    const prefix = string[left];

    while (left < right && string[left] == prefix) left++;

    while (right >= left && string[right] === prefix) right--;
  }

  return right - left + 1;
}
