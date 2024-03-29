// SortingVisualizer.js
import { useState } from "react";

import { selection_sort } from "~/algo/selectionSort";
import ArrayDisplay from "./ArrayDisplay";

const SortingVisualizer = () => {
  const [array, setArray] = useState([14, 8, 1, 5, 19]);

  const visualizeSelectionSort = () => {
    setArray(selection_sort(array.slice())); // Call the sorting algorithm function
  };

  return (
    <div>
      <h1>Sorting Visualizer</h1>
      <ArrayDisplay array={array} />
      <button onClick={visualizeSelectionSort}>Visualize Selection Sort</button>
    </div>
  );
};

export default SortingVisualizer;
