int climbStairs(int n) {
    if (n == 0) {
        return 0;
    } else if (n < 3) {
        return n;
    }
    
    int last1=2, last2=1;
    for (int i = 2; i < n; i++) {
        int temp = last1;
        last1 = last1 + last2;
        last2 = temp;
    }
    
    return last1;        
}
