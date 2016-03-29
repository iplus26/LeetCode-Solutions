// Lowest Common Ancestor of a Binary Search Tree
// 二叉查找树的最小公共祖先

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
	while (1) {
		if (p.val < root.val) {
			if (q.val >= root.val) {
				return root;
			} else {
				root = root.left;
			}
		} else if (p.val == root.val) {
			return root;
		} else {
			if (q.val <= root.val) {
				return root;
			} else {
				root = root.right;
			}
		}
	}
	
	return root; 
};

