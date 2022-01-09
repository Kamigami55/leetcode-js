/*
 * @lc app=leetcode id=973 lang=javascript
 *
 * [973] K Closest Points to Origin
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  let maxHeap = [0]
  const heapifyFropTop = () => {
    if (maxHeap.length <= 1) return
    let index = 1
    while (true) {
      if (index * 2 >= maxHeap.length) {
        // no children
        return
      } else if (index * 2 + 1 >= maxHeap.length) {
        // only have left child
        if (maxHeap[index].dist < maxHeap[index * 2].dist) {
          // swap with left
          ;[maxHeap[index], maxHeap[index * 2]] = [maxHeap[index * 2], maxHeap[index]]
          index = index * 2
        } else {
          return
        }
      } else {
        // have both children
        if (
          maxHeap[index].dist < maxHeap[index * 2].dist ||
          maxHeap[index].dist < maxHeap[index * 2 + 1].dist
        ) {
          if (maxHeap[index * 2].dist < maxHeap[index * 2 + 1].dist) {
            // swap with right
            ;[maxHeap[index], maxHeap[index * 2 + 1]] = [maxHeap[index * 2 + 1], maxHeap[index]]
            index = index * 2 + 1
          } else {
            // swap with left
            ;[maxHeap[index], maxHeap[index * 2]] = [maxHeap[index * 2], maxHeap[index]]
            index = index * 2
          }
        } else {
          return
        }
      }
    }
  }

  const heapifyFropBottom = () => {
    if (maxHeap.length <= 1) return
    let index = maxHeap.length - 1
    while (true) {
      let parentIdx = Math.floor(index / 2)
      if (parentIdx < 1) {
        // no parent
        return
      } else {
        // have parent
        if (maxHeap[index].dist > maxHeap[parentIdx].dist) {
          // swap
          ;[maxHeap[index], maxHeap[parentIdx]] = [maxHeap[parentIdx], maxHeap[index]]
          index = parentIdx
        } else {
          return
        }
      }
    }
  }

  for (let i = 0; i < points.length; ++i) {
    const distance = Math.pow(points[i][0], 2) + Math.pow(points[i][1], 2)
    if (i < k) {
      maxHeap.push({
        point: points[i],
        dist: distance,
      })
      heapifyFropBottom()
    } else {
      if (distance < maxHeap[1].dist) {
        maxHeap[1] = {
          point: points[i],
          dist: distance,
        }
        heapifyFropTop()
      }
    }
  }
  maxHeap.shift() // remove index 0 placeholder
  return maxHeap.map((item) => item.point)
}
// @lc code=end
