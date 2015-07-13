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
'use strict';

var sumNumbers = function(root) {
    if (root === null) {
        return 0;
    }

    var sum = root.val;

    if (root.right !== null && root.left !== null) {
        return cal(root.right, sum) + cal(root.left, sum);
    } else if (root.right !== null) {
        return cal(root.right, sum);
    } else if (root.left !== null) {
        return cal(root.left, sum);
    } else {
        return sum;
    }

    return -1;
};

var cal = function(root, sum) {
    sum = sum * 10 + root.val;

    if (root.right !== null && root.left !== null) {
        return cal(root.right, sum) + cal(root.left, sum);
    } else if (root.right !== null) {
        return cal(root.right, sum);
    } else if (root.left !== null) {
        return cal(root.left, sum);
    } else {
        return sum;
    }

    return -1;
};