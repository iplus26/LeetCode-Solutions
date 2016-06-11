/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
	var vowels = ['a', 'e', 'i', 'o', 'u',
	              'A', 'E', 'I', 'O', 'U'];
	var i = 0, j = s.length - 1;
	var temp;
	
	while (i < j) {
		while (vowels.indexOf(s[i]) === -1) {
			++i;
			
			if (i === s.length - 1 || j <= i) {
				return s;
			}	
		}
		while (vowels.indexOf(s[j]) === -1) {
			--j;
			
			if (j === 0 || j <= i) {
				return s;
			}	
		}
		if (i < j) {
			if (s[i] !== s[j]) {
				s = [s.slice(0, i), s[j], s.slice(i + 1, j), s[i], s.slice(j + 1)].join('');
			}
			++i;
			--j;
		} else {
			return s;
		}
	}
	
	return s;
};

reverseVowels('hello');
reverseVowels('0E');