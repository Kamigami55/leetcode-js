/*
 * @lc app=leetcode id=482 lang=javascript
 *
 * [482] License Key Formatting
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
  const pureStr = s.replace(/-/g, '').toUpperCase()
  const fullLength = pureStr.length
  const numChunks = Math.ceil(fullLength / k)
  const lenFirstChunk = fullLength - (numChunks - 1) * k
  const chunks = []
  chunks.push(pureStr.substring(0, lenFirstChunk))
  for (let i = 0; i < numChunks - 1; ++i) {
    chunks.push(pureStr.substring(lenFirstChunk + k * i, lenFirstChunk + k * i + k))
  }
  return chunks.join('-')
}
// @lc code=end
