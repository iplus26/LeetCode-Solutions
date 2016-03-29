'use strict';
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var set = [],
        str = '';

    var addpar = function(str, left, right) {
        if (left === 0 && right === 0) {
            set.push(str);
            return;
        }
        if (right > 0) {
            addpar(str + ')', left, right - 1);
        }
        if (left > 0) {
            addpar(str + '(', left - 1, right + 1);
        }
    };

    addpar(str, n, 0);
    return set;
};
