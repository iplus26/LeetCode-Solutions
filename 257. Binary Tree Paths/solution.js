var binaryTreePaths = function(root) {
    if (!root) return []
    if (!root.left && !root.right) return [root.val + ''];
    
    return binaryTreePaths(root.left).map(function(el) {
            return root.val + '->' + el;
        })
   .concat(binaryTreePaths(root.right).map(function(el) {
            return root.val + '->' + el;
        }))
};