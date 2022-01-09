/*
 * @lc app=leetcode id=844 lang=javascript
 *
 * [844] Backspace String Compare
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// TODO refactor for runtime
// Your runtime beats 7.18 % of javascript submissions
// Your memory usage beats 97.18 % of javascript submissions (38.4 MB)
var backspaceCompare = function (s, t) {
  let pointerT = t.length
  let skipCntS = 0
  for (let pointerS = s.length - 1; pointerS >= 0; --pointerS) {
    if (s[pointerS] === '#') {
      ++skipCntS
      continue
    }
    if (skipCntS > 0) {
      --skipCntS
      continue
    }

    let skipCntT = 0
    while (true) {
      --pointerT
      if (t[pointerT] === '#') {
        ++skipCntT
        continue
      }
      if (skipCntT > 0) {
        --skipCntT
        continue
      }
      if (pointerT < 0) return false
      if (t[pointerT] !== s[pointerS]) {
        return false
      }
      // got matching char with s from t
      break
    }
  }
  // all s iterated, and found match chars in t
  // loop through remaining t
  let skipCntT = 0
  while (pointerT--) {
    if (t[pointerT] === '#') {
      ++skipCntT
      continue
    }
    if (skipCntT > 0) {
      --skipCntT
      continue
    }
    // found other remaining char
    return false
  }
  return true
}
// @lc code=end
