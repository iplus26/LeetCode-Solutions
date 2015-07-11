/**
 * @param {number} n
 * @return {number}
 */
"use strict";

Math.log10 = Math.log10 || function(x) {
        return Math.log(x) / Math.LN10;
    };

var countDigitOne = function(n) {

    var length = parseInt(Math.log10(n));
    var count = 0;

    for (var i = 0; i <= length; i++) {
        var base = Math.pow(10, i); // 1, 10, 100, ...
        count += (parseInt((n - base) / base / 10) + 1) * base -
            ((parseInt(n / base) % 10) == 1 ? (parseInt(n / base + 1) * base - n - 1) : 0);
    }

    return count;
};