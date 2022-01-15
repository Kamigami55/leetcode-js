/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
/*
14/14 cases passed (108 ms)
Your runtime beats 17.38 % of javascript submissions
Your memory usage beats 29.27 % of javascript submissions (38.9 MB)
*/
var generate = function (numRows) {
  let ans = [[1]]
  if (numRows > 1) {
    ans.push([1, 1])
  }
  for (let i = 2; i < numRows; ++i) {
    ans.push([1])
    for (let j = 1; j < ans[i - 1].length; ++j) {
      ans[i].push(ans[i - 1][j - 1] + ans[i - 1][j])
    }
    ans[i].push(1)
  }
  return ans
}
// @lc code=end
