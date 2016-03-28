var flatten = function(root) {
	
	if (root) {
		
		var path = [], node; 
		
		preOrder(root, path);
		
		while (path.length) {
			node = path.shift();
			node.left = null;
			node.right = path[0];
		}
		
	}
};

var preOrder = function(node, path) {

	// save the root node.
	path.push(node);
	
	// go for the left subtree
	if (node.left) {
		preOrder(node.left, path);
	}

	// go for the right subtree
	if (node.right) {
		preOrder(node.right, path);
	}
	
}