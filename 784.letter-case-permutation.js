/*
 * @lc app=leetcode id=784 lang=javascript
 *
 * [784] Letter Case Permutation
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
/*
63/63 cases passed (170 ms)
Your runtime beats 14.66 % of javascript submissions
Your memory usage beats 12.36 % of javascript submissions (45.8 MB)
*/
var letterCasePermutation = function (s) {
  let ans = []
  function backtrack(str, i) {
    while (i < str.length) {
      if (Number.isNaN(parseInt(str[i]))) {
        backtrack(str, i + 1)
        backtrack(toggleCase(str, i), i + 1)
        return
      }
      ++i
    }
    ans.push(str)
  }
  backtrack(s, 0)
  return ans
}

function toggleCase(str, index) {
  const char = str[index]
  let newChar
  if (char >= 'a' && char <= 'z') {
    newChar = char.toUpperCase()
  } else {
    newChar = char.toLowerCase()
  }
  return str
    .split('')
    .map((ch, idx) => (idx === index ? newChar : ch))
    .join('')
}
// @lc code=end
