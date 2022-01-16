/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/*
106/106 cases passed (89 ms)
Your runtime beats 64.53 % of javascript submissions
Your memory usage beats 90.52 % of javascript submissions (40.6 MB)
*/
var jump = function (nums) {
  if (nums.length === 1) return 0
  let step = 1
  let currEnd = 0
  let nextEnd = 0
  for (let i = 0; i < nums.length; ++i) {
    if (i + nums[i] >= nums.length - 1) return step
    nextEnd = Math.max(nextEnd, i + nums[i])
    if (i === currEnd) {
      ++step
      currEnd = nextEnd
    }
  }
}
// @lc code=end
