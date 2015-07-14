int titleToNumber(char* s) {
	int length = strlen(s);
	int sum = 0;
	
	for (int i = 0; i < length; i++) {
		sum += (s[i] - 'A' + 1) * pow(26, length - i - 1);
		
	}
	
	return sum;	    
}