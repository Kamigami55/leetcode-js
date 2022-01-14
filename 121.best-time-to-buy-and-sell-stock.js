/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
/*
211/211 cases passed (139 ms)
Your runtime beats 28.11 % of javascript submissions
Your memory usage beats 34.71 % of javascript submissions (48.9 MB)
*/
var maxProfit = function (prices) {
  let low = 10000
  let ans = 0
  for (let num of prices) {
    low = Math.min(low, num)
    ans = Math.max(ans, num - low)
  }
  return ans
}
// @lc code=end
