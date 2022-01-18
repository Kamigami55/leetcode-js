/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
 * @return {ListNode}
 */
/*
Recursive
28/28 cases passed (116 ms)
Your runtime beats 23.65 % of javascript submissions
Your memory usage beats 9.93 % of javascript submissions (41.2 MB)
*/
var reverseList = function (head) {
  if (!head) return head
  return reverse(head, null)
}
function reverse(head, prev) {
  const next = head.next
  head.next = prev
  return next ? reverse(next, head) : head
}

/*
Iteratively
28/28 cases passed (133 ms)
Your runtime beats 11.22 % of javascript submissions
Your memory usage beats 87.72 % of javascript submissions (40.2 MB)
*/
// var reverseList = function (head) {
//   let prev = null
//   while (head) {
//     const next = head.next
//     head.next = prev
//     prev = head
//     head = next
//   }
//   return prev
// }
// @lc code=end
