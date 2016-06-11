int reverse(int x) {
    long long reversed = 0;
    while (x != 0) {
            reversed *= 10;
            reversed += x % 10;
            x /= 10;
    }
    return (reversed > INT_MAX || reversed < INT_MIN) ? 0 : reversed;
}
