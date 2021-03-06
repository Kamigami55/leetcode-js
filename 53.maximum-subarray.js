/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// TODO Add Divide and conquer solution

/*
209/209 cases passed (100 ms)
Your runtime beats 61.21 % of javascript submissions
Your memory usage beats 19.99 % of javascript submissions (49 MB)
*/
var maxSubArray = function (nums) {
  let ans = nums[0]
  let sum = 0
  for (let num of nums) {
    sum += num
    ans = Math.max(sum, ans)
    sum = Math.max(sum, 0)
  }
  return ans
}
// @lc code=end
