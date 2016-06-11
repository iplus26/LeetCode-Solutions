# 345. Reverse Vowels of a String 解题小记

这道题很简单，就是用两个“指针”一个从首位往后，一个从末位往前，遇到元音字母 (vowel) 就进行交换即可。

这道题遇到了一个问题就是 JavaScript 中 string 类型的属性是只读的 ([immutable](https://en.wikipedia.org/wiki/Immutable_object#JavaScript))，也就是说我们不可以使用类似于

    var temp = s[j]; s[j] = s[i]; s[i] = temp;

的方式来将前后两个 pointer 所指向的字符进行交换。我使用的方法是

    s = [s.slice(0, i), s[j], s.slice(i + 1, j), s[i], s.slice(j + 1)].join('');

来实现这个效果。
