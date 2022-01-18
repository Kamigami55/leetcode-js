/*
 * @lc app=leetcode id=605 lang=javascript
 *
 * [605] Can Place Flowers
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
/*
124/124 cases passed (131 ms)
Your runtime beats 15.52 % of javascript submissions
Your memory usage beats 87.86 % of javascript submissions (40.6 MB)
*/
var canPlaceFlowers = function (flowerbed, n) {
  if (n === 0) return true
  flowerbed.unshift(0)
  flowerbed.push(0)
  for (let i = 1; i < flowerbed.length - 1; ++i) {
    if (flowerbed[i] === 0 && flowerbed[i + 1] === 0 && flowerbed[i - 1] === 0) {
      if (--n === 0) {
        return true
      }
      ++i
    }
  }
  return false
}
// @lc code=end
