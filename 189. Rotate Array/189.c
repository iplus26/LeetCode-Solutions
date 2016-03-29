void rotate(int nums[], int n, int k) {
	    k%=n;
		int buf[k], i;
		
		for (i = n - k; i < n; i++) {
			buf[i-n+k] = nums[i];
		}   // 被丢弃的尾数k个
		for (i = n - 1; i >= k; i--) {
			nums[i] = nums[i-k];
		}   // 保留k个位置
		for (i = 0; i < k; i++) {
			nums[i] = buf[i];
		}   // 恢复k个尾数
	}