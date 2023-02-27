// URL: https://leetcode.com/problems/construct-quad-tree/

/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

class Node {
  constructor(val, isLeaf, topLeft, topRight, bottomLeft, bottomRight) {
    this.val = val;
    this.isLeaf = isLeaf;
    this.topLeft = topLeft;
    this.topRight = topRight;
    this.bottomLeft = bottomLeft;
    this.bottomRight = bottomRight;
  }
}

/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function (grid) {
  function helper(fromI, fromJ, subsize) {
    if (subsize === 1) {
      const val = grid[fromI][fromJ];
      return new Node(val, true, null, null, null, null);
    }

    let result = new Node(false, false, null, null, null, null);

    const halfSize = subsize / 2;
    let srTopLeft = helper(fromI, fromJ, halfSize);
    let srTopRight = helper(fromI, halfSize + fromJ, halfSize);
    let srBottomLeft = helper(halfSize + fromI, fromJ, halfSize);
    let srBottomRight = helper(halfSize + fromI, halfSize + fromJ, halfSize);

    if (
      srTopLeft.isLeaf &&
      srTopRight.isLeaf &&
      srBottomLeft.isLeaf &&
      srBottomRight.isLeaf
    ) {
      if (
        srTopLeft.val === srTopRight.val &&
        srTopLeft.val === srBottomLeft.val &&
        srTopLeft.val === srBottomRight.val
      ) {
        result.val = srTopLeft.val;
        result.isLeaf = true;
      }
    }

    if (!result.isLeaf) {
      result.topLeft = srTopLeft;
      result.topRight = srTopRight;
      result.bottomLeft = srBottomLeft;
      result.bottomRight = srBottomRight;
    }

    return result;
  }

  const size = grid.length;
  let result = helper(0, 0, size);
  return result;
};
