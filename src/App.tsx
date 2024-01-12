import "./App.css";
import { radixSort } from "./algo/radixSort";
import { recursiveBubbleSort } from "./algo/recursiveBubbleSort";
import { armstrongNumber } from "./leetcode/armStrongNumber";
import {
  leftRotate,
  rotateLeftByDElement,
  rotateLeftByDElementOptimal,
} from "./leetcode/leftRotate";
import { longestSubArrayWithSum } from "./leetcode/longestSubArrayWithSum";
import { findMissingNumber } from "./leetcode/missingNumber";
import maxPower from "./leetcode/mostConsecutiveChar";
import { mostConsecutiveOnes } from "./leetcode/mostConsecutiveOnes";
import { moveZero, optimalMoveZero } from "./leetcode/moveZero";
import { numberExtraction } from "./leetcode/numberExtraction";
import { reverseInteger } from "./leetcode/reverseInteger";
import { singleNumber } from "./leetcode/singleNumber";
import { unionIntersection } from "./leetcode/unionIntersection";
import { unionOfSortedArray } from "./leetcode/unionOfSortedArray";

function App() {
  const sortedArray = [1, 2, 3, 4, 5, 6, 7];
  const unsortedArray = [12, 7, 2, 19, 33, 17, 28, 5];

  // selection_sort(unsortedArray);
  // insertionSort(unsortedArray);

  // console.log("Bubble Sort", bubble_sort(unsortedArray));
  // console.log(frequencyCounter([1, 2, 3], [1, 4, 9]));
  // console.log(maxSubArraySum(unsortedArray, 1));
  // console.log(binarySearch([1, 2, 3, 5, 6, 9, 15, 19], 32));

  // lengthOfLongestSubstring("abcdbaacvbcc");
  // console.log(naiveSearch("abclolabc", "abc"));
  // merge([1, 2, 8, 20], [28, 56, 59, 99]);
  // mergeSort(unsortedArray);
  // quickSort(unsortedArray);
  // radixSort([18, 232, 4, 332, 23425, 5232, 52321, 423, 421, 3234, 13]);
  // console.log(recursiveBubbleSort(unsortedArray));
  // console.log(
  //   secondLargestElement(
  //     radixSort([18, 232, 4, 332, 23425, 5232, 52321, 423, 421, 3234, 13])
  //   )
  // );

  // removeDuplicate([1, 1, 2, 2, 3, 4, 4, 5, 5]);

  leftRotate([1, 2, 3, 4, 5]);
  rotateLeftByDElement(unsortedArray, 3);
  console.log(unsortedArray);
  rotateLeftByDElementOptimal(sortedArray, 3);
  moveZero([1, 3, 4, 5, 6, 0, 8, 0, 9, 0, 7, 0]);
  optimalMoveZero([1, 3, 4, 5, 6, 0, 8, 0, 9, 0, 7, 0]);
  console.log(unionOfSortedArray([1, 2, 3, 4, 5], [1, 3, 4, 6, 8, 2]));
  console.log(unionIntersection([1, 2, 2, 4, 5], [1, 2, 3, 6, 8]));
  console.log(findMissingNumber([0, 1]));
  mostConsecutiveOnes([0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0]);
  console.log(
    "SINGLE NUMBER",
    singleNumber([1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5])
  );

  console.log(longestSubArrayWithSum([1, 1, 2, 2, 3, 4, 4], 12));
  maxPower("j");

  console.log("NUMBER EXTRACTION", numberExtraction(8812));
  console.log("REVERSE INTEGER >>", reverseInteger(1534236469));
  console.log("ARMSTRONG NUMBER >>", armstrongNumber(1634));
  return (
    <>
      <h1>Vite + React</h1>
      <h5>
        Radix Sort{" "}
        {radixSort([
          18, 232, 4, 332, 23425, 5232, 52321, 423, 421, 3234, 13,
        ]).join(", ")}
      </h5>
      <h5>
        Recursive Bubble Sort {recursiveBubbleSort(unsortedArray).join(", ")}
      </h5>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
