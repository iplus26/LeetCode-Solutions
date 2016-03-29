'use strict';
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    if (root === null) {
        return 0;
    }

    var rightDepth = 0,
        leftDepth = 0,
        left = root,
        right = root;

    while (left !== null) {
        left = left.left;
        leftDepth++;
    }
    while (right !== null) {
        right = right.right;
        rightDepth++;
    }

    if (rightDepth === leftDepth) {
        return Math.pow(2, rightDepth) - 1;
    }

    return 1 + countNodes(root.right) + countNodes(root.left);
};