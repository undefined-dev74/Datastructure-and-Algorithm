import { factorial } from "./factorial";
import { reverseStringRecursion } from "./reverseStringRecursion";
import { twoSum, twoSumOptimized } from "./twoSum";

const Practice = () => {
  console.log(twoSum([1, 2, 3, 4, 5, 6, 7], 10));
  console.log(twoSumOptimized([1, 2, 3, 4, 5, 6, 7], 10));
  console.log(factorial(5));
  console.log(reverseStringRecursion("hello"));
  return <div>Practice</div>;
};

export default Practice;
