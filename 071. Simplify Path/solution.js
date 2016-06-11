/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    var stk = [], i = 0, len;
    
    var split = path.split('/');
    
    for (len = split.length; i < len; i++) {
        switch (split[i]) {
            case '..':
            
                /*
                    Corner Case: /../ ==> /
                */
            
                stk.pop();    
                break;
            
            /* Fall through */
            case '': 
            case '.':
                break;
                
            default:
                stk.push(split[i]);
                break;
        }
    }
    
    return '/' + stk.join('/');
};
