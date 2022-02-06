/*
 * @lc app=leetcode id=454 lang=javascript
 *
 * [454] 4Sum II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
/*
132/132 cases passed (208 ms)
Your runtime beats 94.66 % of javascript submissions
Your memory usage beats 60.6 % of javascript submissions (46.3 MB)
*/
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  let ans = 0
  const map = new Map()
  for (let n1 of nums1) {
    for (let n2 of nums2) {
      const diff = -(n1 + n2)
      if (map.has(diff)) {
        map.set(diff, map.get(diff) + 1)
      } else {
        map.set(diff, 1)
      }
    }
  }
  for (let n3 of nums3) {
    for (let n4 of nums4) {
      if (map.has(n3 + n4)) {
        ans += map.get(n3 + n4)
      }
    }
  }
  return ans
}
// @lc code=end
