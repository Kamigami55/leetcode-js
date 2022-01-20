/*
 * @lc app=leetcode id=120 lang=javascript
 *
 * [120] Triangle
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
/*
44/44 cases passed (112 ms)
Your runtime beats 28.84 % of javascript submissions
Your memory usage beats 77.31 % of javascript submissions (40 MB)
*/
var minimumTotal = function (triangle) {
  for (let i = 1; i < triangle.length; ++i) {
    for (let j = 0; j <= i; ++j) {
      let minTop
      if (j === 0) {
        minTop = triangle[i - 1][j]
      } else if (j === i) {
        minTop = triangle[i - 1][j - 1]
      } else {
        minTop = Math.min(triangle[i - 1][j], triangle[i - 1][j - 1])
      }
      triangle[i][j] += minTop
    }
  }
  let ans = triangle[triangle.length - 1][0]
  for (let j = 1; j < triangle.length; ++j) {
    ans = Math.min(ans, triangle[triangle.length - 1][j])
  }
  return ans
}
// @lc code=end
