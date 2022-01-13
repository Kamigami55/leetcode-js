/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
/*
  59/59 cases passed (76 ms)
  Your runtime beats 62.86 % of javascript submissions
  Your memory usage beats 30.57 % of javascript submissions (39.2 MB)
*/
var merge = function (nums1, m, nums2, n) {
  let pt1 = m - 1
  let pt2 = n - 1
  for (let pt = m + n - 1; pt >= 0 && pt2 >= 0; --pt) {
    if (nums1[pt1] > nums2[pt2]) {
      nums1[pt] = nums1[pt1--]
    } else {
      nums1[pt] = nums2[pt2--]
    }
  }
}
// @lc code=end
