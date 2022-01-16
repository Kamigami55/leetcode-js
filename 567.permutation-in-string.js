/*
 * @lc app=leetcode id=567 lang=javascript
 *
 * [567] Permutation in String
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
/*
106/106 cases passed (187 ms)
Your runtime beats 44.93 % of javascript submissions
Your memory usage beats 65.89 % of javascript submissions (41.5 MB)
*/
var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false
  const map1 = new Array(26).fill(0)
  const map2 = new Array(26).fill(0)
  for (let i = 0; i < s1.length; ++i) {
    ++map1[s1[i].charCodeAt(0) - 'a'.charCodeAt(0)]
    ++map2[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)]
  }

  let conutMatchChar = 0
  for (let i = 0; i < 26; ++i) {
    if (map1[i] === map2[i]) ++conutMatchChar
  }

  if (conutMatchChar === 26) return true
  for (let i = s1.length; i < s2.length; ++i) {
    let prevLeft = s2[i - s1.length].charCodeAt(0) - 'a'.charCodeAt(0)
    let currRight = s2[i].charCodeAt(0) - 'a'.charCodeAt(0)
    if (map2[prevLeft] === map1[prevLeft]) --conutMatchChar
    --map2[prevLeft]
    if (map2[prevLeft] === map1[prevLeft]) ++conutMatchChar

    if (map2[currRight] === map1[currRight]) --conutMatchChar
    ++map2[currRight]
    if (map2[currRight] === map1[currRight]) ++conutMatchChar
    if (conutMatchChar === 26) return true
  }

  return false
}
// @lc code=end
