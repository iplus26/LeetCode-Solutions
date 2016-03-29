/**
 * @param {number[]} num
 * @return {string}
 */
'use strict';
var largestNumber = function(num) {
    return num.sort(function(a, b) {
            return (b + '' + a) - (a + '' + b);
        }).join('').replace(/^0*/, '') || '0';
};