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

和这道题相关的是 Power of Two 和 Power of Three (我发现前者我竟然是用正则来 match 的我也是醉了 xD) 目前见过的最正的解法应该是利用整数上限来解。(C 语言实现)

    bool isPowerOfThree(int n) {
      /*
      pow(3,19) is the max int which is less than INT_MAX.
      3^m % n == 0 which can be described by 3^m == n * k (exists such a number of k)

      3 is a prime, which means that 3^m can be factored 3 * 3 * 3 *... * 3 (count of m), so n should be and can only be 3 * 3 * 3*...*3, which means that n is a pow of 3.

      if we want to find a pow of 4, we can not use this method because 4 is not a prime.
      4^m can be factored 2* 2 * 2 * ... * 2 (count of 2m), so n can be any one of 2*2*2*..*2(any count is ok).
      */
      return (n > 0) && ((int)(pow(3, 19)) % n == 0);
    }

