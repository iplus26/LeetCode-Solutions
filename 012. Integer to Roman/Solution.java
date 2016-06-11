public class Solution {
    public String intToRoman(int num) {
        String roman = ""; 
        int d[] = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};
        String r[] = {"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"};
        
        for (int i = 0; i < 13; i++) {
            for (int j = 0; j < num / d[i]; j++) {
                roman += r[i];
            }
            num -= num / d[i] * d[i];
        }
        
        
        
        return roman;
    }
}
