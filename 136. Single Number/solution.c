int singleNumber(int* nums, int numsSize) {
    if(numsSize == 1) return nums[0];
    int first = nums[0];
    for(int i = 1; i < numsSize; i++){
        first = first ^ nums[i];
    }
    return first;
}
