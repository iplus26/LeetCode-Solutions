int trailingZeroes(int n) {
	int zero=0;
	while(n>0){
		zero+=n/5;
		n/=5;
	}
	return zero;
}