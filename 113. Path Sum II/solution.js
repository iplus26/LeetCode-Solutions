/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    var count = function(root, currentSum) {
        if (!root) return [];
        
        currentSum += root.val;
        
        if (!root.left && !root.right) {
            if (currentSum === sum) return [[root.val]]
            else return []
        } else {
            return ( //currentSum === sum ? [] : 
                   count(root.left, currentSum).map(function(arr) {
                       return [root.val].concat(arr);
                   }).concat(
                   count(root.right, currentSum).map(function(arr) {
                       return [root.val].concat(arr);
                   })))
        }
    }
    
    return count(root, 0);
};