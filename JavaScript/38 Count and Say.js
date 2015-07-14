/**
 * @param {number} n
 * @return {string}
 */
'use strict';

var countAndSay = function(n) {
    var str = '1';

    for (var i = 0; i < n - 1; i++) {
        str = say(str);
    }

    console.log(str);

    return str;
};

var say = function(str) {

    // if (str == '1') {
    //     return ;
    // }

    var new_str = '',
        count = 0,
        pre = str[0];

    for (var i = 0; i < str.length; i++) {
        if (str[i] == pre) {
            count++;
        } else if (count === 1) {
            new_str += '1' + pre.toString();
            pre = str[i];
        } else {
            new_str += count + pre.toString();
            count = 1;
            pre = str[i];
        }
    }

    if (count === 1) {
        new_str += '1' + pre.toString();
        pre = str[i];
    } else {
        new_str += count + pre.toString();
        count = 1;
        pre = str[i];
    }

    return new_str;
};

countAndSay(2);