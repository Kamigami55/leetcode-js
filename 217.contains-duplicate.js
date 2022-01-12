/* eslint-disable no-undef */
/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
/*
  69/69 cases passed (137 ms)
  Your runtime beats 34.96 % of javascript submissions
  Your memory usage beats 22.8 % of javascript submissions (48.3 MB)
*/
var containsDuplicate = function (nums) {
  const set = new Set()
  for (const num of nums) {
    if (set.has(num)) return true
    set.add(num)
  }
  return false
}
// @lc code=end
