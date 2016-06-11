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
var rightSideView = function(root) {
    
    var view = [];
    
    var inOrderTraverse = function(root, level) {
        
        if (!root) {
            return;
        }
        
        // Left children
        inOrderTraverse(root.left, level + 1);
        
        view[level] = root.val;
        
        // Right children
        inOrderTraverse(root.right, level + 1);
    }
    
    inOrderTraverse(root, 0);
    
    return view;
};
