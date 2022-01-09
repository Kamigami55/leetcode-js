/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let farrest = 0
  for (let i = 0; i < nums.length; ++i) {
    if (i > farrest) break
    farrest = Math.max(farrest, i + nums[i])
  }
  if (farrest >= nums.length - 1) return true
  return false
}
// @lc code=end
