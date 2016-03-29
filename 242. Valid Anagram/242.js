/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
	var i, alphabet = {};
	
	for (i = 0; i < s.length; i++) {
		if (alphabet.hasOwnProperty(s[i])) alphabet[s[i]]++;
		else alphabet[s[i]] = 1;
	}
	
	for (i = 0; i < t.length; i++) {
		if (alphabet[t[i]] > 0) alphabet[t[i]]--;
		else return false;
	}
	
	for (i in alphabet) 
		if (alphabet.hasOwnProperty(i) && alphabet[i] !== 0)
			return false;
	
	return true;

};

var s = "rat", t = "car";
console.log(isAnagram(s, t));