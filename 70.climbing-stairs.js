/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
/*
45/45 cases passed (68 ms)
Your runtime beats 88.79 % of javascript submissions
Your memory usage beats 30.35 % of javascript submissions (38.8 MB)
*/
var climbStairs = function (n) {
  let step = [1, 0]
  for (let i = 0; i < n; ++i) {
    step[i + 1] += step[i]
    step.push(step[i])
  }
  return step[n]
}
// @lc code=end
