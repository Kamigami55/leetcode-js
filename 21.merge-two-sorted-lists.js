/* eslint-disable no-undef */
/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
/*
208/208 cases passed (175 ms)
Your runtime beats 5.09 % of javascript submissions
Your memory usage beats 71.53 % of javascript submissions (40.4 MB)
*/
var mergeTwoLists = function (list1, list2) {
  if (!list1) {
    return list2
  } else if (!list2) {
    return list1
  }
  let root
  let end
  root = end = new ListNode()
  while (list1 && list2) {
    if (list1.val < list2.val) {
      end.next = list1
      end = end.next
      list1 = list1.next
    } else {
      end.next = list2
      end = end.next
      list2 = list2.next
    }
  }
  if (list1) {
    end.next = list1
  } else {
    end.next = list2
  }
  return root.next
}
// @lc code=end
