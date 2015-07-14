int countPrimes(int n) {
	if (n < 3) {
		return 0;
	}
	bool isPrime[n];
	memset(isPrime, true, sizeof(isPrime));
	
	int count = 0;
	
	isPrime[0] = false;
	isPrime[1] = false;
	for (int j = 2; j < n; j++) {
		if (isPrime[j]) {
			for (int i = j * 2; i < n; i += j) {
				// 去掉偶数
				isPrime[i] = false;
			}
		}
	}
	for (int i = 0; i < n; i++) {
		if (isPrime[i]) {
			count++;
		}
	}
	
	return count;
	
}