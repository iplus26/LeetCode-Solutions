/**
 * Definition for a binary tree node for Max Howell.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
"use strict";

var invertTree = function(root) {
	invertSubTree(root);
	return root;
};

var invertSubTree = function (p) {
	if (p !== null) {
		var tempTreeNode = p.left;
		p.left = p.right;
		p.right = tempTreeNode;
		invertSubTree(p.left);
		invertSubTree(p.right);
	} else {
		return;
	}
};