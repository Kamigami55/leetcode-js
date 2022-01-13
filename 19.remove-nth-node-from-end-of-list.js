/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
/*
  208/208 cases passed (135 ms)
  Your runtime beats 8.35 % of javascript submissions
  Your memory usage beats 86.38 % of javascript submissions (39.8 MB)
 */
var removeNthFromEnd = function (head, n) {
  if (!head.next && n === 1) {
    return null
  }
  let end = head
  while (n--) {
    end = end.next
  }
  if (!end) {
    return head.next
  }
  let target = head
  while (end.next) {
    end = end.next
    target = target.next
  }
  target.next = target.next.next
  return head
}
// @lc code=end
