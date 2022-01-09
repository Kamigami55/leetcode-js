/*
 * @lc app=leetcode id=904 lang=javascript
 *
 * [904] Fruit Into Baskets
 */

// @lc code=start
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  if (fruits.length <= 2) return fruits.length

  let ansCount = 0
  let left = 0
  let right = 0
  let isMovingRight = true

  const bucket = [
    {
      type: fruits[0],
      count: 1,
    },
    {
      type: null,
      count: 0,
    },
  ]

  while (right < fruits.length - 1) {
    if (isMovingRight) {
      ++right
      // first condition
      if (bucket[1].type === null) {
        if (fruits[right] === bucket[0].type) {
          ++bucket[0].count
        } else {
          bucket[1].type = fruits[right]
          bucket[1].count = 1
        }
      } else if (fruits[right] === bucket[0].type) {
        ++bucket[0].count
      } else if (fruits[right] === bucket[1].type) {
        ++bucket[1].count
      } else {
        isMovingRight = false
        if (ansCount < bucket[0].count + bucket[1].count) {
          ansCount = bucket[0].count + bucket[1].count
        }
      }
    } else {
      if (fruits[left] === bucket[0].type) {
        --bucket[0].count
        if (bucket[0].count === 0) {
          bucket[0].type = fruits[right]
          bucket[0].count = 1
          isMovingRight = true
        }
      } else {
        --bucket[1].count
        if (bucket[1].count === 0) {
          bucket[1].type = fruits[right]
          bucket[1].count = 1
          isMovingRight = true
        }
      }
      ++left
    }
  }
  if (bucket[1].type === null) {
    return bucket[0].count
  }
  return Math.max(ansCount, bucket[0].count + bucket[1].count)
}
// @lc code=end
