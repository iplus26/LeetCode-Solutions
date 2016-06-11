# 342. Power of Four 解题小记

这道题要求判断一个数是不是 4 的次方。

最直接的想法就是利用循环或者迭代：

    var isPowerOfFour = function(num) {
        while (num && num % 4 === 0) {
            num /= 4;
        }
    
        return num === 0;
    };

但是题目中的 Follow up 对我们提出了更高的要求

> Could you solve it without loops/recursion?

不难想到用位操作，我们发现 4 的次方的二进制形式都是 `1 00 .. 00 00` 形式 (注意零的个数是偶数)，所以我使用求和来判断是否符合。 (180ms)

    var isPowerOfFour = function(num) {
      var bit = num.toString(2);
    
      return bit.length % 2 === 1 && 
        parseInt(Array.prototype.reduce.call(bit, function(prev, current) {
          return parseInt(prev) + parseInt(current);
        })) === 1;
    };
