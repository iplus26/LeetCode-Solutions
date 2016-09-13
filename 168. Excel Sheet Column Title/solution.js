/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    if (n === 0) return '';
    
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
        m = (n - 1) % 26; // 0 - 25
    
    return convertToTitle((n - m - 1) / 26) + '' + alphabet[m];
};