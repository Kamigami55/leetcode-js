/*
 * @lc app=leetcode id=1291 lang=javascript
 *
 * [1291] Sequential Digits
 */

// @lc code=start
/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
/*
23/23 cases passed (103 ms)
Your runtime beats 18.75 % of javascript submissions
Your memory usage beats 81.25 % of javascript submissions (38.4 MB)
*/
var sequentialDigits = function (low, high) {
  let ans = []
  for (let firstDigit = 1; firstDigit <= 9; ++firstDigit) {
    let num = firstDigit
    let digit = firstDigit
    while (true) {
      if (num >= low && num <= high) ans.push(num)
      ++digit
      num = num * 10 + digit
      if (digit > 9 || num > high) break
    }
  }
  return ans.sort((a, b) => a - b)
}
// @lc code=end
