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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    var traversal = [];

    var walk = function(node) {
        if (node === null) {
            return;
        }

        if (node.left !== null) {
            walk(node.left);
        }
        traversal.push(node.val);
        if (node.right !== null) {
            walk(node.right);
        }
    };

    walk(root);

    return traversal;
};