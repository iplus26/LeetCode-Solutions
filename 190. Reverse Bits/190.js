/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
'use strict';
var reverseBits = function(n) {
    var num = 0;
    for (var i = 0; i < 32; i++) {
        num += ((n % 2) * Math.pow(2, 31 - i));
        n = parseInt(n / 2);
    }
    return num;
};