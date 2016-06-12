double myPow (double x, int n){
    if (n==0) {
        return 1;
    }
    int original = n;
    n = abs(n);
    if (n % 2) {
        double pow_re = myPow(x, n/2);
        return (original > 0) ? pow_re * pow_re * x : 1/(pow_re * pow_re * x);
    } else {
        double pow_re = myPow(x, n/2);
        return (original > 0) ? pow_re * pow_re : 1/(pow_re * pow_re);
    }
}
