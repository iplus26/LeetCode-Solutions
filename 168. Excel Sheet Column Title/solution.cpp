class Solution {
public:
    string convertToTitle(int n) {
    string s = "";
    char c;
    
    while (n > 0) {
        int tail = n % 26;
        if (tail == 0) {    // 26(Z), 52(AZ), ... 
            tail = 26;
            c = 'Z';
        } else 
            c = tail + 'A' - 1;
        s = c + s;
        n -= tail;
        n /= 26;
    }
    
    return s;
}
};