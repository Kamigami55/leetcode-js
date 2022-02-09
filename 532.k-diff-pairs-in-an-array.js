/*
 * @lc app=leetcode id=532 lang=javascript
 *
 * [532] K-diff Pairs in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  let ans = 0
  if (k === 0) {
    const ht = new Map()
    for (let num of nums) {
      if (ht.get(num)) {
        ++ans
        ht.set(num, false) // mark as used
      } else if (!ht.has(num)) {
        ht.set(num, true) // can be matched with next itself
      }
    }
  } else {
    const set = new Set()
    for (let num of nums) {
      set.add(num - k)
    }
    for (let num of nums) {
      if (set.has(num)) {
        ++ans
        set.delete(num)
      }
    }
  }
  return ans
}
// @lc code=end
