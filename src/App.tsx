import "./App.css";
import { binarySearchExtended } from "./algo/binarySearch";
import { mergeTwoSortedArrays } from "./algo/mergeSortedArray";
import { radixSort } from "./algo/radixSort";
import { recursiveBubbleSort } from "./algo/recursiveBubbleSort";
import { twoPointerSum, twoSum } from "./leetcode/2sum";
import { armstrongNumber } from "./leetcode/armStrongNumber";
import { chunkArray } from "./leetcode/chunkArray";
import { dominantIndex } from "./leetcode/dominantIndex";
import { findSpecialInteger } from "./leetcode/findSpecialInteger";
import { leadersInArrayPosition } from "./leetcode/leadersInArrayPosition";
import {
  leftRotate,
  rotateLeftByDElement,
  rotateLeftByDElementOptimal,
} from "./leetcode/leftRotate";
import {
  longestConsecutive,
  longestConsecutiveOptimal,
} from "./leetcode/longestConsecutive";
import {
  longestSubArrayWithSum,
  twoPointerLongestWithSum,
} from "./leetcode/longestSubArrayWithSum";
import { majorityElements } from "./leetcode/majorityElement";
import { maxFrequencyElement } from "./leetcode/maxFrequencyElement";
import { maximumSubArraySum } from "./leetcode/maximumSubArraySum";
import { findMissingNumber } from "./leetcode/missingNumber";
import maxPower from "./leetcode/mostConsecutiveChar";
import { mostConsecutiveOnes } from "./leetcode/mostConsecutiveOnes";
import { moveZero, optimalMoveZero } from "./leetcode/moveZero";
import { numJewelsInStones } from "./leetcode/numJewelsInStones";
import { numberExtraction } from "./leetcode/numberExtraction";
import { rearrangeArray } from "./leetcode/rearrangeArray";
import { repeatedSubstringPattern } from "./leetcode/repeatedSubstringPattern";
import { reverseInteger } from "./leetcode/reverseInteger";
import { searchInsert } from "./leetcode/searchElement";
import { singleNumber } from "./leetcode/singleNumber";
import {
  dnfSortArrayOfZeronOnes,
  sortArrayOfZeronOnes,
} from "./leetcode/sortArrayOfZeronOnes";
import { unionIntersection } from "./leetcode/unionIntersection";
import { unionOfSortedArray } from "./leetcode/unionOfSortedArray";
import SortingVisualizer from "./views/SortingVisualizer";

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

  console.log(
    "LONGEST SUB ARRAY",
    longestSubArrayWithSum([1, 1, 2, 2, 3, 4, 4], 6)
  );
  console.log(
    "TWO POINTER, SUB ARRAY",
    twoPointerLongestWithSum([1, 1, 2, 2, 3, 4, 4], 6)
  );
  maxPower("j");

  console.log("REVERSE INTEGER >>", reverseInteger(1534236469));
  console.log("ARMSTRONG NUMBER >>", armstrongNumber(1634));
  console.log("CHUNK ARRAY", chunkArray([1, 9, 6, 3, 2], 2));
  console.log(
    "Find special integer",
    findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10])
  );
  console.log("repeatedSubstringPattern", repeatedSubstringPattern("aba"));

  console.log("TWO SUM", twoSum([1, 5, 6, 7, 9, 2, 5, 7], 12));
  console.log("NUMBER EXTRACTION", numberExtraction(8812));

  console.clear();
  console.log(twoPointerSum([1, 2, 5, 7, 9], 12));

  console.log(sortArrayOfZeronOnes([0, 1, 0, 2, 1, 1, 0, 1, 0, 0, 2, 2, 1, 1]));
  console.log(
    "DNF",
    dnfSortArrayOfZeronOnes([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0])
  );
  // console.log(dnfSo  rtColors([0, 1, 0, 2, 1, 1, 0, 1, 0, 0, 2, 2, 1, 1]));
  console.log(majorityElements([2, 2, 1, 1, 1, 2, 2]));
  console.log(maximumSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
  console.log(
    "BINARY SEARCH EXTENDED",
    binarySearchExtended([1, 2, 3, 5, 6, 9, 15, 19], 17)
  );

  mergeTwoSortedArrays([0, 0, 3, 0, 0, 0, 0, 0, 0], 3, [-1, 1, 1, 1, 2, 3], 6);

  rearrangeArray([3, 1, -2, -5, 2, -4]);

  console.log(searchInsert([1, 3, 5, 6], 2));
  console.log(dominantIndex([1, 2, 3, 4]));
  numJewelsInStones("aA", "aAAbbbb");

  console.log(leadersInArrayPosition([10, 22, 12, 3, 0, 6]));
  console.log("CHECK", longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
  console.log(
    "CHECK",
    longestConsecutiveOptimal([11, 2, 1, 7, 6, 7, 8, 9, 10])
  );

  maxFrequencyElement([1, 2, 1, 2, 3, 4, 3, 5, 3]);
  return (
    <>
      <SortingVisualizer />
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
        MERGE TWO SORTED ARRAY <br /> [0, 0, 3, 0, 0, 0, 0, 0, 0], 3, [-1, 1, 1,
        1, 2, 3], 6
      </p>
    </>
  );
}

export default App;
