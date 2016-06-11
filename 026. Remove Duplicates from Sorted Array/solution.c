int removeDuplicates(int A[], int n) {
    if (n==0) return 0;
    int p = 1;
    int i = 0;
    for (i = 1; i < n; i++){
        if (A[i] != A[i-1]) {
            A[p] = A[i];
            p++;
        }
    }
    return p;
}
