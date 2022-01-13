/*
 * @lc app=leetcode id=452 lang=javascript
 *
 * [452] Minimum Number of Arrows to Burst Balloons
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
/*
  48/48 cases passed (323 ms)
  Your runtime beats 37.38 % of javascript submissions
  Your memory usage beats 24.27 % of javascript submissions (69.8 MB)
 */
var findMinArrowShots = function (points) {
  points.sort((a, b) => a[1] - b[1])
  let ans = 0
  let pivot = Number.MIN_SAFE_INTEGER
  for (let i = 0; i < points.length; ++i) {
    if (pivot >= points[i][0] && pivot <= points[i][1]) {
      continue
    } else {
      ++ans
      pivot = points[i][1]
    }
  }
  return ans
}
// @lc code=end
