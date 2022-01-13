/*
 * @lc app=leetcode id=876 lang=javascript
 *
 * [876] Middle of the Linked List
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
  36/36 cases passed (109 ms)
  Your runtime beats 12.86 % of javascript submissions
  Your memory usage beats 53.08 % of javascript submissions (38.9 MB)
*/
var middleNode = function (head) {
  let mid = head
  let end = head
  while (end && end.next) {
    end = end.next.next
    mid = mid.next
  }
  return mid
}
// @lc code=end
