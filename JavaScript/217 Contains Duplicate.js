/**
 * @param {number[]} nums
 * @return {boolean}
 */
'use strict';
var containsDuplicate = function(nums) {
    var map = [];

    for (var i = 0; i < nums.length; i++) {
        if (map[nums[i]] !== undefined) {
            return true;
        } else {
            map[nums[i]] = true;
        }
    }

    return false;
};