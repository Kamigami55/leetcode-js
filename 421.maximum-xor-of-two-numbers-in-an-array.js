/*
 * @lc app=leetcode id=421 lang=javascript
 *
 * [421] Maximum XOR of Two Numbers in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/*
41/41 cases passed (6622 ms)
Your runtime beats 5.55 % of javascript submissions
Your memory usage beats 94.44 % of javascript submissions (52.4 MB)
*/
// TODO Use better soultion
var findMaximumXOR = function (nums) {
  let ans = 0
  nums = new Set(nums)
  for (let a of nums.values()) {
    for (let b of nums.values()) {
      ans = Math.max(ans, a ^ b)
    }
  }
  // for (let i = 0; i < nums.length; ++i) {
  //   for (let j = i + 1; j < nums.length; ++j) {
  //     ans = Math.max(ans, nums[i] ^ nums[j])
  //   }
  // }
  return ans
}
// @lc code=end
