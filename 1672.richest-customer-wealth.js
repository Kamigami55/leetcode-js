/*
 * @lc app=leetcode id=1672 lang=javascript
 *
 * [1672] Richest Customer Wealth
 */

// @lc code=start
/**
 * @param {number[][]} accounts
 * @return {number}
 */
/*
34/34 cases passed (82 ms)
Your runtime beats 51.42 % of javascript submissions
Your memory usage beats 5.05 % of javascript submissions (42.1 MB)
*/
var maximumWealth = function (accounts) {
  const M = accounts.length
  const N = accounts[0].length
  let ans = 0
  for (let i = 0; i < M; ++i) {
    let wealth = 0
    for (let j = 0; j < N; ++j) {
      wealth += accounts[i][j]
    }
    ans = Math.max(ans, wealth)
  }
  return ans
}
// @lc code=end
