/*
 * @lc app=leetcode id=520 lang=javascript
 *
 * [520] Detect Capital
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
/*
550/550 cases passed (126 ms)
Your runtime beats 19.83 % of javascript submissions
Your memory usage beats 83.47 % of javascript submissions (40 MB)
*/
var detectCapitalUse = function (word) {
  if (word.length === 1) return true
  const isFirstLetterUpper = isUppercase(word[0])
  const isSecondLetterUpper = isUppercase(word[1])
  let remainShouldBeUpper = false
  if (isFirstLetterUpper) {
    if (isSecondLetterUpper) {
      remainShouldBeUpper = true
    }
  } else {
    if (isSecondLetterUpper) {
      return false
    }
  }
  for (let i = 2; i < word.length; ++i) {
    if (isUppercase(word[i]) !== remainShouldBeUpper) return false
  }
  return true
}

function isUppercase(char) {
  return char >= 'A' && char <= 'Z'
}

// @lc code=end
