/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let sum = l1.val + l2.val
  const ans = {
    val: sum > 9 ? sum - 10 : sum,
    next: null,
  }
  let carryOn = sum > 9 ? 1 : 0
  let pt1 = l1
  let pt2 = l2
  let ptAns = ans
  while (true) {
    if (pt1.next && pt2.next) {
      sum = pt1.next.val + pt2.next.val + carryOn
      pt1 = pt1.next
      pt2 = pt2.next
    } else if (pt1.next) {
      sum = pt1.next.val + carryOn
      pt1 = pt1.next
    } else if (pt2.next) {
      sum = pt2.next.val + carryOn
      pt2 = pt2.next
    } else {
      break
    }
    carryOn = sum > 9 ? 1 : 0
    ptAns.next = {
      val: sum > 9 ? sum - 10 : sum,
      next: null,
    }
    ptAns = ptAns.next
  }
  if (carryOn === 1) {
    ptAns.next = {
      val: 1,
      next: null,
    }
  }
  return ans
}
// @lc code=end
