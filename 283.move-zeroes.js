/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/*
  74/74 cases passed (181 ms)
  Your runtime beats 14.38 % of javascript submissions
  Your memory usage beats 94.13 % of javascript submissions (43.1 MB)
 */
var moveZeroes = function (nums) {
  let pt = 0
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] !== 0) {
      nums[pt++] = nums[i]
    }
  }
  while (pt < nums.length) {
    nums[pt++] = 0
  }
}
// @lc code=end
