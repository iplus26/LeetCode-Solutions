int mySqrt(int x) {
    if (x < 2) {
        return x;
    }
    
    int left=x, middle, right=0;
    while (left >= right) {
        middle = (left + right)/2;
        if (x/middle < middle) {
            if (middle - x/middle == 1) {
                return x/middle;
            }
            left = --middle;
        } else if (x/middle > middle) {
            if (x/middle - middle == 1) {
                return middle;
            }
            right = ++middle;
        } else {
            return middle;
        }
    }
    
    return -1;
}
