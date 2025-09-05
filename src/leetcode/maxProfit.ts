/* 
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell. 
*/
export function maxProfit(prices: number[]): number {
  let min = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const cost = prices[i] - min;
    maxProfit = Math.max(maxProfit, cost);

    min = Math.min(min, prices[i]);
  }
  return maxProfit;
}
