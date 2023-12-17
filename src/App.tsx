import "./App.css";
import { binarySearch } from "./algo/binarySearch";
import { bubble_sort } from "./algo/bubbleSort";
import { frequencyCounter } from "./algo/freqeuncyCounter";
import { insertionSort } from "./algo/insertionSort";
import { lengthOfLongestSubstring } from "./algo/lengthOfLongestSubstring";
import { maxSubArraySum } from "./algo/maxSubArraySum";
import { naiveSearch } from "./algo/naiveSearch";
import { selection_sort } from "./algo/selectionSort";

function App() {
  const unsortedArray = [12, 7, 2, 19, 33, 17, 28, 5];
  selection_sort(unsortedArray);
  insertionSort(unsortedArray);
  bubble_sort(unsortedArray);
  console.log(frequencyCounter([1, 2, 3], [1, 4, 9]));
  console.log(maxSubArraySum(unsortedArray, 1));
  console.log(binarySearch([1, 2, 3, 5, 6, 9, 15, 19], 32));

  lengthOfLongestSubstring("abcdbaacvbcc");
  console.log(naiveSearch("abclolabc", "abc"));
  return (
    <>
      <h1>Vite + React</h1>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
