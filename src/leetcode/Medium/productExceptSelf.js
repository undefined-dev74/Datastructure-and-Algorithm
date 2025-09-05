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
  let product_without_zero = 1;
  let count_of_zero = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count_of_zero++;
    } else {
      product_without_zero *= nums[i];
    }
  }

  let results = Array(nums.length);

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element !== 0) {
      if (count_of_zero > 0) results[i] = 0;
      else {
        results[i] = product_without_zero / element;
      }
    } else {
      if (count_of_zero > 1) results[i] = 0;
      else results[i] = product_without_zero;
    }
  }
  return results;
}

function productExceptSelf_third(nums) {
  let n = nums.length;
  let left = Array(n);
  let right = Array(n);
  left[0] = 1;
  right[n - 1] = 1;
  let results = Array(n);

  for (let i = 1; i < n; i++) {
    left[i] = nums[i - 1] * left[i - 1];
  }
  for (let i = n - 2; i >= 0; i--) {
    right[i] = nums[i + 1] * right[i + 1];
  }
  for (let i = 0; i < n; i++) {
    results[i] = left[i] * right[i];
  }
  console.log(results);
  return results;
}

// productExceptSelf([1, 2, 3, 4]);
productExceptSelf_second([1, 2, 3, 4]);
productExceptSelf_third([1, 2, 3, 4]);
