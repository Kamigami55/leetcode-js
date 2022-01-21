/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
/*
200/200 cases passed (127 ms)
Your runtime beats 17.12 % of javascript submissions
Your memory usage beats 92.33 % of javascript submissions (39.2 MB)
*/
var maxProfit = function (prices) {
  let profit = 0
  for (let i = 1; i < prices.length; ++i) {
    const diff = prices[i] - prices[i - 1]
    if (diff > 0) {
      profit += diff
    }
  }
  return profit
}
// @lc code=end
