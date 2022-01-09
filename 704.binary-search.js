/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 1. While loop binary search
// 47/47 cases passed (76 ms)
// Your runtime beats 81.96 % of javascript submissions
// Your memory usage beats 52.68 % of javascript submissions (42.3 MB)

var search = function (nums, target) {
  let start = 0
  let end = nums.length - 1
  while (true) {
    if (end - start < 0) return -1
    const mid = Math.floor((start + end) / 2)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
}

// 2. Recursive binary search

// 47/47 cases passed (115 ms)
// Your runtime beats 15.38 % of javascript submissions
// Your memory usage beats 96.76 % of javascript submissions (41.8 MB)

// var search = function (nums, target) {
//   return binarySearch(nums, target, 0, nums.length)
// }

// function binarySearch(arr, target, start, end) {
//   if (end - start < 0) return -1
//   const mid = Math.floor((start + end) / 2)
//   if (arr[mid] === target) {
//     return mid
//   } else if (arr[mid] > target) {
//     return binarySearch(arr, target, start, mid - 1)
//   } else {
//     return binarySearch(arr, target, mid + 1, end)
//   }
// }
// @lc code=end
