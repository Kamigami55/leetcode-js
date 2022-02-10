/*
 * @lc app=leetcode id=560 lang=javascript
 *
 * [560] Subarray Sum Equals K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/*
89/89 cases passed (93 ms)
Your runtime beats 92.54 % of javascript submissions
Your memory usage beats 36.62 % of javascript submissions (49.7 MB)
*/
var subarraySum = function (nums, k) {
  const ht = new Map()
  ht.set(0, 1)
  let curSum = 0
  let ans = 0
  for (let num of nums) {
    curSum += num
    if (ht.has(curSum - k)) {
      ans += ht.get(curSum - k)
    }
    if (ht.has(curSum)) {
      ht.set(curSum, ht.get(curSum) + 1)
    } else {
      ht.set(curSum, 1)
    }
  }
  return ans
}
// @lc code=end
