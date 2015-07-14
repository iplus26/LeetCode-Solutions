int rob(int* nums, int numsSize) {
	if (numsSize == 0) {
		return 0;
	} else if (numsSize < 3) {
		return nums[0] > nums[1] ? nums[0] : nums[1];
	} else if (numsSize == 3) {
		return (nums[0] + nums[2]) > nums[1] ? (nums[0] + nums[2]) : nums[1];
	}
	
	int dp[numsSize];
	memset(dp, 0, sizeof(dp));
	dp[0] = nums[0];
	dp[1] = nums[1];
	dp[2] = nums[0] + nums[2];
	for (int i = 3; i < numsSize; i++) {
		dp[i] = nums[i] + ( dp[i-2] > dp[i-3] ? dp[i-2] : dp[i-3] );
	}
	return dp[numsSize-1] > dp[numsSize-2] ? dp[numsSize-1] : dp[numsSize-2];
}