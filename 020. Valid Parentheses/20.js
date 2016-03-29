'use strict';
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stk = [];

    for (var i = 0; i < s.length; i++) {
        switch (s[i]) {
            case '(' :
            case '{' :
            case '[' : stk.push(s[i]); break;
            case ')' :
                if (stk[stk.length - 1] == '(') {
                    stk.pop();
                } else {
                    return false;
                }
                break;
            case '}' :
                if (stk[stk.length - 1] == '{') {
                    stk.pop();
                } else {
                    return false;
                }
                break;
            case ']' :
                if (stk[stk.length - 1] == '[') {
                    stk.pop();
                } else {
                    return false;
                }
                break;
            default: return false;
        }
    }

    if (stk.length === 0) {
        return true;
    } else {
        return false;
    }
};