/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
'use strict';
var levelOrder = function(root) {
    var depth = 0;
    var traversal = [];

    var walk = function(node, depth) {
        if (node === null) {
            return;
        }

        if (traversal.length <= depth) {
            traversal[depth] = [];
        }
        traversal[depth].push(node.val);

        walk(node.left, ++depth);
        walk(node.right, depth);
    };

    walk(root, depth);

    return traversal;
};