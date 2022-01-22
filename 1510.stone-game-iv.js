/*
 * @lc app=leetcode id=1510 lang=javascript
 *
 * [1510] Stone Game IV
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
/*
72/72 cases passed (301 ms)
Your runtime beats 15.38 % of javascript submissions
Your memory usage beats 7.69 % of javascript submissions (65.1 MB)
*/
var winnerSquareGame = function (n) {
  // if n is square number already (1, 4, 9, ...)
  if (Number.isInteger(Math.sqrt(n))) return true

  const dp = new Map()

  // Build up square numbers from 1 to n
  const sqrNums = []
  let sqrt = 1
  while (true) {
    const newSqrNums = sqrt ** 2
    if (newSqrNums > n) break
    sqrNums.push(newSqrNums)
    dp.set(newSqrNums, true) // square number can win
    ++sqrt
  }

  function canWin(num) {
    if (dp.get(num) === true) return true
    for (let i = 0; i < sqrNums.length; ++i) {
      if (sqrNums[i] >= num) break
      const opponentNum = num - sqrNums[i]
      const opponentCanWin = dp.has(opponentNum) ? dp.get(opponentNum) : canWin(opponentNum)
      if (opponentCanWin === false) {
        // we can win
        dp.set(num, true)
        return true
      }
    }
    // we will lose
    dp.set(num, false)
    return false
  }

  return canWin(n)

  // [1,4,9,16,25,36,49,...]
  // 1 win
  // 2 lose
  // 3 win from 2 + 1
  // 4 win sq
  // 5 lose
  // 6 win from 2 + 4
  // 7 lose
  // 8 win from 7 + 1
}
// @lc code=end
