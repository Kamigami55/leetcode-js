/* eslint-disable no-undef */
/*
 * @lc app=leetcode id=588 lang=javascript
 *
 * [588] Design In-Memory File System
 */

// @lc code=start

/*
63/63 cases passed (163 ms)
Your runtime beats 7.98 % of javascript submissions
Your memory usage beats 76.06 % of javascript submissions (42.1 MB)
*/

var FileSystem = function () {
  this.content = ''
  this.children = new Map()
}

/**
 * @param {string} path
 * @return {string[]}
 */
FileSystem.prototype.ls = function (path) {
  let nodes = path.split('/')
  nodes.shift()
  let childName = nodes[0]
  if (childName === '') {
    return [...this.children.keys()].sort()
  }
  let child = this.children.get(childName)
  if (child && child.content !== '') {
    return [childName]
  }
  nodes.shift()
  return child.ls('/' + nodes.join('/'))
}

/**
 * @param {string} path
 * @return {void}
 */
FileSystem.prototype.mkdir = function (path) {
  let nodes = path.split('/')
  nodes.shift()
  let childName = nodes[0]
  if (childName === '') {
    return
  }
  if (!this.children.has(childName)) {
    this.children.set(childName, new FileSystem())
  }
  let child = this.children.get(childName)
  nodes.shift()
  return child.mkdir('/' + nodes.join('/'))
}

/**
 * @param {string} filePath
 * @param {string} content
 * @return {void}
 */
FileSystem.prototype.addContentToFile = function (filePath, content) {
  let nodes = filePath.split('/')
  nodes.shift()
  let childName = nodes[0]
  if (childName === '') {
    this.content += content
    return
  }
  if (!this.children.has(childName)) {
    this.children.set(childName, new FileSystem())
  }
  let child = this.children.get(childName)
  nodes.shift()
  return child.addContentToFile('/' + nodes.join('/'), content)
}

/**
 * @param {string} filePath
 * @return {string}
 */
FileSystem.prototype.readContentFromFile = function (filePath) {
  let nodes = filePath.split('/')
  nodes.shift()
  let childName = nodes[0]
  if (childName === '') {
    return this.content
  }
  // if (!this.children.has(childName)) {
  //   this.children.set(childName, new FileSystem())
  // }
  let child = this.children.get(childName)
  nodes.shift()
  return child.readContentFromFile('/' + nodes.join('/'))
}

/**
 * Your FileSystem object will be instantiated and called as such:
 * var obj = new FileSystem()
 * var param_1 = obj.ls(path)
 * obj.mkdir(path)
 * obj.addContentToFile(filePath,content)
 * var param_4 = obj.readContentFromFile(filePath)
 */
// @lc code=end
