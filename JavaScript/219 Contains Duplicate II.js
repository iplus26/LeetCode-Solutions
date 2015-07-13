/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
'use strict';
var containsNearbyDuplicate = function(nums, k) {
    if (nums.length < 2 || k < 1) {
        return false;
    }

    var map = [];

    for (var i = 0; i < nums.length; i++) {
        if (map[nums[i]] !== undefined) {
            return true;
        } else {
            if (i - k >= 0) {
                map[nums[i - k]] = undefined;
            }
            map[nums[i]] = true;
        }
    }

    return false;
};