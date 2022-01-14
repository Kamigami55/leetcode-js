/* eslint-disable no-undef */
/*
 * @lc app=leetcode id=350 lang=javascript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
/*
56/56 cases passed (92 ms)
Your runtime beats 38.67 % of javascript submissions
Your memory usage beats 50.61 % of javascript submissions (40.6 MB)
*/
var intersect = function (nums1, nums2) {
  const ht = new Map()
  for (let num of nums1) {
    if (ht.has(num)) {
      ht.set(num, ht.get(num) + 1)
    } else {
      ht.set(num, 1)
    }
  }

  let ans = []
  for (let num of nums2) {
    if (ht.has(num)) {
      ans.push(num)
      if (ht.get(num) === 1) {
        ht.delete(num)
      } else {
        ht.set(num, ht.get(num) - 1)
      }
    }
  }
  return ans
}
// @lc code=end
