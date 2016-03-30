/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
	var arr = preorder.split(','),
		count = 0;
	for (var i = arr.length - 1; i >= 0; i--) {
		if (arr[i] === '#') {
			count++;
			arr.pop();
		} else {
			if (count >= 2) {
				--count;
				arr.pop();
			} else {
				return false;
			}
		}
//		console.log(arr, count);
	}
	
	if (arr.length === 0 && count === 1) {
		return true;
	}
	
	return false;
};

console.log(isValidSerialization("9,3,4,#,#,1,#,#,2,#,6,#,#"));
console.log(isValidSerialization("5,1,#,#,#"));
console.log(isValidSerialization("5,#,#,#,#"));