/*
 * @lc app=leetcode id=389 lang=javascript
 *
 * [389] Find the Difference
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
/*
54/54 cases passed (124 ms)
Your runtime beats 30.06 % of javascript submissions
Your memory usage beats 18.01 % of javascript submissions (43.8 MB)
*/
var findTheDifference = function (s, t) {
  const ht = new Map()
  for (let char of s) {
    if (ht.has(char)) {
      ht.set(char, ht.get(char) + 1)
    } else {
      ht.set(char, 1)
    }
  }
  for (let char of t) {
    if (!ht.has(char)) {
      return char
    } else if (ht.get(char) === 0) {
      return char
    } else {
      ht.set(char, ht.get(char) - 1)
    }
  }
}
// @lc code=end
