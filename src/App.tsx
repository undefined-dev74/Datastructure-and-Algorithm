import "./App.css";
import { binarySearch } from "./algo/binarySearch";
import { bubble_sort } from "./algo/bubbleSort";
import { frequencyCounter } from "./algo/freqeuncyCounter";
import { insertionSort } from "./algo/insertionSort";
import { lengthOfLongestSubstring } from "./algo/lengthOfLongestSubstring";
import { maxSubArraySum } from "./algo/maxSubArraySum";
import { merge, mergeSort } from "./algo/mergeSort";
import { naiveSearch } from "./algo/naiveSearch";
import { quickSort } from "./algo/quickSort";
import { radixSort } from "./algo/radixSort";
import { recursiveBubbleSort } from "./algo/recursiveBubbleSort";
import { selection_sort } from "./algo/selectionSort";

function App() {
  const sortedArray = [1, 2, 3, 4, 5, 6, 7];
  const unsortedArray = [12, 7, 2, 19, 33, 17, 28, 5];
  selection_sort(unsortedArray);
  insertionSort(unsortedArray);

  console.log("Bubble Sort", bubble_sort(unsortedArray));
  console.log(frequencyCounter([1, 2, 3], [1, 4, 9]));
  console.log(maxSubArraySum(unsortedArray, 1));
  console.log(binarySearch([1, 2, 3, 5, 6, 9, 15, 19], 32));

  lengthOfLongestSubstring("abcdbaacvbcc");
  console.log(naiveSearch("abclolabc", "abc"));
  merge([1, 2, 8, 20], [28, 56, 59, 99]);
  mergeSort(unsortedArray);
  quickSort(unsortedArray);
  radixSort([18, 232, 4, 332, 23425, 5232, 52321, 423, 421, 3234, 13]);
  console.log(recursiveBubbleSort(unsortedArray));
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
