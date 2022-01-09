/*
 * @lc app=leetcode id=253 lang=javascript
 *
 * [253] 253. Meeting Rooms II
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
  // Input: intervals = [[7,10],[2,4]]
  // Input: intervals = [[0,30],[5,10],[15,20]]

  // Sorted by start time
  const meetings = intervals.sort((a, b) => a[0] - b[0])

  // let ans = 1;
  const minHeap = [0, meetings[0][1]]

  // const getTop = () => minHeap[1]
  const heapifyFromTop = () => {
    let index = 1
    while (true) {
      if (index * 2 >= minHeap.length) {
        // not have child
        return
      } else if (index * 2 + 1 >= minHeap.length) {
        // only have left child
        if (minHeap[index] <= minHeap[index * 2]) {
          return
        }
        ;[minHeap[index], minHeap[index * 2]] = [minHeap[index * 2], minHeap[index]]
        index = index * 2
      } else {
        // have both children
        if (minHeap[index] <= minHeap[index * 2] && minHeap[index] <= minHeap[index * 2 + 1]) {
          return
        }
        if (minHeap[index * 2] <= minHeap[index * 2 + 1]) {
          // swap with left child
          ;[minHeap[index], minHeap[index * 2]] = [minHeap[index * 2], minHeap[index]]
          index = index * 2
        } else {
          // swap with right child
          ;[minHeap[index], minHeap[index * 2 + 1]] = [minHeap[index * 2 + 1], minHeap[index]]
          index = index * 2 + 1
        }
      }
    }
  }

  // [[150,772],[482,2269],[928,5032],[2030,4360],[3072,3741],[3960,4588]]

  const heapifyFromBottom = () => {
    let index = minHeap.length - 1
    while (true) {
      const idxParent = Math.floor(index / 2)
      if (index <= 1) {
        // root
        return
      } else if (minHeap[idxParent] <= minHeap[index]) {
        return
      } else {
        // swap with parent
        ;[minHeap[index], minHeap[idxParent]] = [minHeap[idxParent], minHeap[index]]
        index = idxParent
      }
    }
  }

  for (let i = 1; i < meetings.length; ++i) {
    // const end = meetings[i][1]
    if (meetings[i][0] >= minHeap[1]) {
      // free
      minHeap[1] = meetings[i][1]
      heapifyFromTop()
    } else {
      // add more room
      minHeap.push(meetings[i][1])
      heapifyFromBottom()
      // ++ans;
    }
  }
  return minHeap.length - 1
  // return minHeap
  // return ans
}
// @lc code=end
