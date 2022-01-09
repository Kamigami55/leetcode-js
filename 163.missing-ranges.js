/*
 * @lc app=leetcode id=163 lang=javascript
 *
 * [163] Missing Ranges
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function (nums, lower, upper) {
  nums.unshift(lower - 1)
  nums.push(upper + 1)
  let ans = []
  for (let i = 0; i < nums.length - 1; ++i) {
    let diff = nums[i + 1] - nums[i]
    if (diff === 2) {
      ans.push((nums[i] + 1).toString())
    } else if (diff > 2) {
      ans.push((nums[i] + 1).toString() + '->' + (nums[i + 1] - 1).toString())
    }
  }
  return ans
}
// @lc code=end
