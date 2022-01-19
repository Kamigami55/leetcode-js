/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
/*
27/27 cases passed (207 ms)
Your runtime beats 30.15 % of javascript submissions
Your memory usage beats 31.03 % of javascript submissions (47.3 MB)
*/
var combine = function (n, k) {
  if (n < k || k < 1 || n < 1) return []
  if (n === k) return [Array.from(Array(n).keys()).map((key) => key + 1)]
  if (k === 1) return Array.from(Array(n).keys()).map((key) => [key + 1])
  let ans = []
  while (n - k >= 0) {
    let newArrs = combine(n - 1, k - 1)
    newArrs.forEach((newArr) => newArr.push(n))
    newArrs.forEach((newArr) => ans.push(newArr))
    --n
  }
  return ans
}
// @lc code=end
