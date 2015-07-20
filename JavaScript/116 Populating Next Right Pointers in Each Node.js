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
    if (root === null) {
        return;
    }

    var cur = null;

    while (root.left !== null) {
        cur = root;
        while (cur !== null) {
            cur.left.next = cur.right;
            while (cur.next !== null) {
                cur.right.next = cur.next.left;
            }
            cur = cur.next;
        }
        root = root.left;
    }

};


// Time Limit Exceeded. 