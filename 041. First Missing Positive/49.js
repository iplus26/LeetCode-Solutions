var input = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

  var container = {};
  var ret = [];

  strs.forEach(function(str) {
    if (!container[str.length]) container[str.length] = {};
    var sorted = str.split('').sort().join('');
    
    if (container[str.length][sorted]) {
    	container[str.length][sorted].push(str);
    } else {
    	container[str.length][sorted] = [str];
    }
    
  });

  for (var prop in container){
  	for (var i in container[prop]) {
      if (container[prop].hasOwnProperty(i)) {
        ret.push(container[prop][i].sort());
      }
    }  
  }
  
  return ret;
};

console.log(groupAnagrams(input));