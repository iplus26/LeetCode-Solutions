'use strict';

var searchRange = function(nums, target) {
    var range = [];
    range.push(nums.indexOf(target));
    range.push(nums.lastIndexOf(target));
    return range;
};