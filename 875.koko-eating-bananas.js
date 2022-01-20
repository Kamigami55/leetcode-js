/*
 * @lc app=leetcode id=875 lang=javascript
 *
 * [875] Koko Eating Bananas
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
/*
119/119 cases passed (126 ms)
Your runtime beats 40.61 % of javascript submissions
Your memory usage beats 68.02 % of javascript submissions (42.3 MB)
*/
var minEatingSpeed = function (piles, h) {
  let totalBananas = 0
  let maxPileBananas = 0
  for (let pile of piles) {
    totalBananas += pile
    maxPileBananas = Math.max(maxPileBananas, pile)
  }
  let speedMin = Math.ceil(totalBananas / h)
  let speedMax = maxPileBananas
  while (speedMin < speedMax) {
    let hourNeed = 0
    let speedMid = Math.floor((speedMin + speedMax) / 2)
    for (let pile of piles) {
      hourNeed += Math.ceil(pile / speedMid)
      if (hourNeed > h) break
    }
    if (hourNeed > h) {
      speedMin = speedMid + 1
    } else if (hourNeed <= h) {
      speedMax = speedMid
    }
  }
  return speedMin
}
// @lc code=end
