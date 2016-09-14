/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    x += ''; // for 0
    var ret = +((x[0] === '-' ? ['-'].concat(x.split('').reverse().slice(0, x.length - 1)) : x.split('').reverse()).join(''));
    return ret > 2147483647 || ret < -2147483648 ? 0 : ret // for overflows
};