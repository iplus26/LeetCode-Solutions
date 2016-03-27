/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
	
	var i = 1;
	
	nums[-1] = 0;
	
	for (; i < nums.length; i++) {
		nums[i] += nums[i - 1];
	}
	
	this.arr = nums;
	
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
	
	console.log(this);
	
	return this.arr[ j ] - this.arr[ i - 1 ];
	
};

var numArray = new NumArray([-2,0,3,-5,2,-1]);
console.log(numArray.sumRange(0, 1));
console.log(numArray.sumRange(0, 2));