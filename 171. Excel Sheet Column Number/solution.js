/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var singleTrans = function(c) {
        return c.charCodeAt(0) - 64;
    };

    return s.split('').reduce(function(prev, cur) {
        return prev * 26 + singleTrans(cur);
    }, 0);

};
