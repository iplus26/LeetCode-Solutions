'use strict';
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs === null || strs.length === 0) {
        return '';
    }

    var prefix = strs[0];

    for (var i = 0; i < strs.length; i++) {
        var str_len = prefix.length <= strs[i].length ? prefix.length : strs[i].length;
        prefix = prefix.substr(0, str_len);
        for (var j = 0; j < str_len; j++) {
            if (prefix[j] != strs[i][j]) {
                prefix = prefix.substr(0, j);
                break;
            }
        }
    }

    return prefix;
};