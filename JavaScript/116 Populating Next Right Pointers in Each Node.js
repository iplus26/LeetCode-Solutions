'use strict';
/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    // var depth = 0;
    var nextNode = [];

    var walk = function(node, depth) {
        if (node === null) {
            return;
        }

        ++depth;
        if (nextNode[depth] !== null) {
            node.next = nextNode[depth];
        }
        nextNode[depth] = node;

        if (node.right !== null) {
            walk(node.right, depth);
        }

        if (node.left !== null) {
            walk(node.left, depth);
        }
    };

    walk(root, 0);
};