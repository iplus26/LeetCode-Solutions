/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
	var bit = num.toString(2);
	
	return bit.length % 2 === 1 && 
	  parseInt(Array.prototype.reduce.call(bit, function(prev, current) {
		return parseInt(prev) + parseInt(current);
	  })) === 1;
};

console.log(isPowerOfFour(4));