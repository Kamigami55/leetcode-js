/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
/*
133/133 cases passed (155 ms)
Your runtime beats 5.07 % of javascript submissions
Your memory usage beats 98.87 % of javascript submissions (38.2 MB)
*/
var searchMatrix = function (matrix, target) {
  const M = matrix.length
  const N = matrix[0].length
  let left = 0
  let right = M * N - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const val = matrix[Math.floor(mid / N)][mid % N]
    if (val === target) return true
    if (val > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return false
}
// @lc code=end
