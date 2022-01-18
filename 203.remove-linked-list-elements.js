/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
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
 * @param {number} val
 * @return {ListNode}
 */
/*
66/66 cases passed (118 ms)
Your runtime beats 36.5 % of javascript submissions
Your memory usage beats 94.6 % of javascript submissions (43.1 MB)
*/
var removeElements = function (head, val) {
  let prehead = new ListNode(0, head)
  let node = prehead
  while (node.next) {
    if (node.next.val === val) {
      node.next = node.next.next
    } else {
      node = node.next
    }
  }
  return prehead.next
}
// @lc code=end
