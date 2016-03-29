/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
	var ret = (nums.length + 1) * nums.length / 2;
	for (var i = 0; i < nums.length; i++) {
		ret -= nums[i];
	} 
	return ret;
};