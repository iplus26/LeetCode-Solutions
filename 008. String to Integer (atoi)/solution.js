/**
 * @param {string} str
 * @return {number}
 */
var atoi = function(str) {
    if(isNaN(parseInt(str))){
        return 0;
    } else if(parseInt(str) > 2147483647 ){
        return 2147483647;
    } else if(parseInt(str) < -2147483648){
        return -2147483648;
    } else {
        return parseInt(str);
    }
};
