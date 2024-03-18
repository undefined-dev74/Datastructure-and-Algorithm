/* BRUTE AND OPTIMAL APPROACH */
function productExceptSelf(nums) {
  let finalResult = [];
  let leftResult = [];
  let rightResult = [];
  let left = 1;
  let i = 0;
  let j = nums.length;
  let right = 1;
  let n = nums.length;
  while (i < n && j > 0) {
    let a = i == 0 ? left : nums[i - 1] * left;
    leftResult.push(a);
    left = a;
    i++;

    let b = j == nums.length ? right : nums[j] * right;
    rightResult[j - 1] = b;
    right = b;
    j--;
  }

  i = 0;
  while (i < leftResult.length && i < rightResult.length) {
    finalResult[i] = leftResult[i] * rightResult[i];
    i++;
  }

  console.log(leftResult);
  console.log(rightResult);
  console.log(finalResult);
  return finalResult;
}

function productExceptSelf_second(nums) {
  let total = 1;
  let i = 0;
  let finalResult = [];
  while (i < nums.length) {
    total = nums[i] * total;
    i++;
  }
  i = 0;
  while (i < nums.length) {
    finalResult[i] = total / nums[i];
    i++;
  }
  console.log(total);
}
productExceptSelf([1, 2, 3, 4]);
productExceptSelf_second([1, 2, 3, 4]);
