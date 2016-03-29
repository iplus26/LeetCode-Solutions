/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
'use strict';
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    var count = 0;
    var target = 0;

    var walk = function(node) {
        if (node === null) {
            return 0;
        }

        walk(node.left);
        count++;
        if (count === k) {
            target = node.val;
            return;
        }
        walk(node.right);

        return count;
    };

    walk(root);

    return target;
};

