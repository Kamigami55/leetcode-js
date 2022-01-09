/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let idxRightMostNonNine = digits.length - 1
  while (idxRightMostNonNine >= 0 && digits[idxRightMostNonNine] === 9) {
    --idxRightMostNonNine
  }
  if (idxRightMostNonNine === digits.length - 1) {
    ++digits[digits.length - 1]
  } else {
    for (let i = idxRightMostNonNine + 1; i < digits.length; ++i) {
      digits[i] = 0
    }
    if (idxRightMostNonNine < 0) {
      digits.unshift(1)
    } else {
      ++digits[idxRightMostNonNine]
    }
  }
  return digits
}
// @lc code=end
