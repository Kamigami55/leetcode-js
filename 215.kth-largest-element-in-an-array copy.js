/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const hashTable = new Map()
  for (const num of nums) {
    if (hashTable.has(num)) {
      hashTable.set(num, hashTable.get(num) + 1)
    } else {
      hashTable.set(num, 1)
    }
  }
  const hashArraySortedDesc = Array.from(hashTable).sort((a, b) => b[0] - a[0])
  for (const entry of hashArraySortedDesc) {
    if (k <= entry[1]) return entry[0]
    k -= entry[1]
  }
}
// @lc code=end
