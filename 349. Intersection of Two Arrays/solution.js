/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
	var map = {}, i = 0, len = 0,
	    ret = [];
	
	for (len = nums1.length; i < len; i++) {
		map[nums1[i]] = 1;
	}
	
	for (len = nums2.length, i = 0; i < len; i++) {
		if (map[nums2[i]] === 1) {
			++map[nums2[i]];
		}
	}
	
	for (var prop in map) {
		if (map.hasOwnProperty(prop) && map[prop] === 2) {
			ret.push(parseInt(prop));
		}
	}

	return ret;
};

intersection([2, 1, 2, 1], [2, 2]);