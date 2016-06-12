/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    var arr1 = version1.split(".");
    var arr2 = version2.split(".");
    var lenth = (arr1.length > arr2.length) ? arr1.length : arr2.length;
    
    for(var i = 0; i < lenth; i++){
        arr1[i] = (!!arr1[i]) ? parseInt(arr1[i]) : 0;
        arr2[i] = (!!arr2[i]) ? parseInt(arr2[i]) : 0;
        if (arr1[i] === arr2[i]) {
            
        } else if (arr1[i] > arr2[i]) {
            return 1;
        } else {
            return -1;
        }
    }
    return 0;
}
