/**
 * @param {number[]} nums
 * @return {number[]}
 */
'use strict';
var productExceptSelf = function(nums) {
    var output = [];
    output.push(1);

    for (var i = 1; i < nums.length; i++) {
        output[i] = output[i - 1] * nums[i - 1];
    }

    var right = 1;
    for (i = nums.length - 1; i >= 0; i--) {
        output[i] *= right;
        right *= nums[i];
    }

    return output;
};
