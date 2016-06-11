char* addBinary(char* a, char* b) {
    int length_a = strlen(a);
    int length_b = strlen(b);
    int length = length_a > length_b ? length_a : length_b;
    char *result = (char *)malloc(sizeof(char *) * (length + 1));
    int i, j, index, carry = 0;
    int tmp = 0, tmp_a = a[length_a - 1] - '0', tmp_b = b[length_b - 1] - '0';
    for (index = length, i = length_a - 1, j = length_b - 1; index >= 0; index--) {
        tmp = tmp_a + tmp_b + carry;
        carry = tmp > 1 ? 1 : 0;
        result[index] = tmp % 2 + '0';
        if (i > 0) {
            tmp_a = a[--i] - '0';
        } else {
            tmp_a = 0;
        }
        if (j > 0) {
            tmp_b = b[--j] - '0';
        } else {
            tmp_b = 0;
        }
    }
    return (result[0] == '1' ? result : &result[1]);
}
