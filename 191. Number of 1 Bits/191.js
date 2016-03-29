/**
 * @param {number} n - a positive integer
 * @return {number}
 */
'use strict';
var hammingWeight = function(n) {
    var num = 0;
    for (var i = 0; i < 32; i++) {
        num += n % 2;
        n = parseInt(n / 2);
    }
    return num;
};