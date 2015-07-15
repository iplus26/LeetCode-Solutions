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
var postorderTraversal = function(root) {
    var traversal = [];

    var walk = function(node) {
        if (node === null) {
            return;
        }

        if (node.left !== null) {
            walk(node.left);
        }
        if (node.right !== null) {
            walk(node.right);
        }
        traversal.push(node.val);
    };

    walk(root);

    return traversal;
};