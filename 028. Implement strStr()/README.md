# 028. Implement strStr() 解题小记

这道题要求实现一个 strStr() 函数，其实和 JavaScript 中的 String.prototype.indexOf() 实现的是同样的功能，即返回子串的 index 值，如果不包含的话则返回 -1。

于是如果这道题用 JS 实现就很搞笑了。

    var strStr = function(haystack, needle) {
        return haystack.indexOf(needle);
    };

这种题还是老老实实用 C 来实现一遍比较有价值。最简单的想法就是

    int strStr(char *haystack, char *needle) {
      for (int i = 0; ; ++i) {
        for (int j = 0; ; ++j) {
            if (needle[j] == 0) return i;
            if (haystack[i + j] == 0) return -1;
            if (haystack[i + j] != needle[j]) break;
        }
      }
    }

这种方法的时间复杂度是 O(m*n), 有更搞笑的 KMP 算法的时间复杂度是 O(m+n), 原理简单来说就是根据子串的重复特征来避免无谓的比较。等我待会儿看完《算法》的这个章节后再具体来实现一下~
