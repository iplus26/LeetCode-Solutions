'use strict';
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    if (nums.length < 2) {
        return nums;
    }

    var times = [],
        map = [],
        targets = [];

    for (var i = 0; i < nums.length; i++) {
        if (typeof (times[nums[i]]) == 'undefined') {
            // first time
            times[nums[i]] = 1;
            map.push(i);
        } else {
            // second time or more
            times[nums[i]]++;
        }
    }

    for (var j = 0; j < map.length; j++) {
        if (times[nums[map[j]]] > nums.length / 3) {
            targets.push(nums[map[j]]);
        }
    }

    return targets;
};