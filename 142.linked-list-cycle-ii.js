/*
 * @lc app=leetcode id=142 lang=javascript
 *
 * [142] Linked List Cycle II
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
 * @return {ListNode}
 */
/*
16/16 cases passed (154 ms)
Your runtime beats 8.79 % of javascript submissions
Your memory usage beats 65.86 % of javascript submissions (41.4 MB)
*/
var detectCycle = function (head) {
  const set = new Set()
  const prehead = new ListNode()
  prehead.next = head
  let node = head
  while (node) {
    if (set.has(node)) {
      return node
    }
    set.add(node)
    node = node.next
  }
  return null
}
// @lc code=end
