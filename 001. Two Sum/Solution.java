public class Solution {
    public int[] twoSum(int[] nums, int target) {
        int index[] = {0, 0};
        int[] set = new int[100000];
        for ( int i = 0; i < nums.length; i++) {
            set[nums[i] + 50000] = i + 1;
        }
        for ( int i = 0; i < nums.length; i++) {
            if(set[target - nums[i] + 50000] != 0 && set[target - nums[i] + 50000] != i + 1) {
                 int a = set[target - nums[i] + 50000];
                 int b = i + 1;
                index[0] = a < b ? a : b;
                index[1] = a > b ? a : b;
            }
        }
        
        return index;
    }
}
