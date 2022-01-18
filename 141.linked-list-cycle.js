/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
/*
21/21 cases passed (171 ms)
Your runtime beats 5.21 % of javascript submissions
Your memory usage beats 53.18 % of javascript submissions (41.4 MB)
*/
var hasCycle = function (head) {
  let fastHead = head
  while (fastHead && fastHead.next) {
    head = head.next
    fastHead = fastHead.next.next
    if (fastHead === head) return true
  }
  return false
}
// @lc code=end
