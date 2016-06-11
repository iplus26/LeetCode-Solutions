/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    var ret = '', len = s.length;
    while(len) {
        ret += s[--len];
    }
    return ret;
};
