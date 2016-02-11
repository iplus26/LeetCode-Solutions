/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */
'use strict';
/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {

    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {

    	var low = 1, high = n, mid = low;

    	while (low <= high) {
    		mid = (low + high) % 2 === 0 ? (low + high) / 2 : (low + high - 1) / 2;

    		if (!isBadVersion(mid)) {
    			low = mid + 1;
    			++mid;
    		} else {
    			high = mid - 1;
    		}
    	}

    	return mid;
        
    };
};