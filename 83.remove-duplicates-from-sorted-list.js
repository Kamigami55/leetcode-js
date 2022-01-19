/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
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
166/166 cases passed (123 ms)
Your runtime beats 28.94 % of javascript submissions
Your memory usage beats 87.33 % of javascript submissions (40.3 MB)
*/
var deleteDuplicates = function (head) {
  const prehead = new ListNode(0, head)
  let node = head
  while (node && node.next) {
    if (node.val === node.next.val) {
      node.next = node.next.next
    } else {
      node = node.next
    }
  }
  return prehead.next
}
// @lc code=end
