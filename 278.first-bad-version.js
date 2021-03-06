/*
 * @lc app=leetcode id=278 lang=javascript
 *
 * [278] First Bad Version
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

/*
  Your runtime beats 23.16 % of javascript submissions
  Your memory usage beats 76.36 % of javascript submissions (38.4 MB)
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    if (n === 1) return 1
    let left = 1,
      right = n
    while (left < right) {
      let mid = Math.floor((left + right) / 2)
      let isBad = isBadVersion(mid)
      if (isBad) {
        right = mid
      } else {
        left = mid + 1
      }
    }
    return left
  }
}
// @lc code=end
