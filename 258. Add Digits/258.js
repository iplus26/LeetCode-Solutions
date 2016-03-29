/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
	if (num)
	return num % 9 === 0 ? 9 : num % 9;
	else 
	return 0;
};