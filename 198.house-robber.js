/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/*
68/68 cases passed (82 ms)
Your runtime beats 30.66 % of javascript submissions
Your memory usage beats 60.62 % of javascript submissions (38.7 MB)
*/
var rob = function (nums) {
  const len = nums.length
  if (len === 1) return nums[0]
  if (len === 2) return Math.max(nums[0], nums[1])
  let profit = new Array(len)
  profit[0] = nums[0]
  profit[1] = Math.max(nums[0], nums[1])
  for (let i = 2; i < len; ++i) {
    profit[i] = Math.max(profit[i - 1], profit[i - 2] + nums[i])
  }
  return profit[len - 1]
}
// @lc code=end
