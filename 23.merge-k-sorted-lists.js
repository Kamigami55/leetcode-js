/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
/*
133/133 cases passed (88 ms)
Your runtime beats 98.63 % of javascript submissions
Your memory usage beats 7.28 % of javascript submissions (50.8 MB)
*/
var mergeKLists = function (lists) {
  if (!lists.length) return null
  if (lists.length === 1) return lists[0]

  // min heap
  const heap = [null]

  const heapifyFromTop = () => {
    if (heap.length <= 2) return
    let index = 1
    while (true) {
      if (index * 2 >= heap.length) {
        // no child
        return
      }
      let minChildIdx = index * 2 // left child is min child for now
      if (minChildIdx + 1 < heap.length && heap[minChildIdx].val > heap[minChildIdx + 1].val) {
        // right child is min child
        ++minChildIdx
      }
      if (heap[index].val > heap[minChildIdx].val) {
        ;[heap[index], heap[minChildIdx]] = [heap[minChildIdx], heap[index]]
        index = minChildIdx
      } else {
        return
      }
    }
  }

  const heapifyFromBottom = () => {
    if (heap.length <= 2) return
    let index = heap.length - 1
    while (true) {
      const parentIdx = Math.floor(index / 2)
      if (parentIdx < 1) return
      if (heap[parentIdx].val < heap[index].val) return
      ;[heap[index], heap[parentIdx]] = [heap[parentIdx], heap[index]]
      index = parentIdx
    }
  }

  for (let list of lists) {
    if (list !== null) {
      heap.push(list)
      heapifyFromBottom()
    }
  }
  // console.log(heap)

  const ansPreHead = new ListNode()
  let ansEnd = ansPreHead

  while (heap.length > 1) {
    ansEnd.next = heap[1]
    ansEnd = ansEnd.next
    if (heap[1].next === null) {
      heap[1] = heap[heap.length - 1]
      heap.pop()
    } else {
      heap[1] = heap[1].next
    }
    heapifyFromTop()
    // console.log(heap)
  }

  return ansPreHead.next
}
// @lc code=end
