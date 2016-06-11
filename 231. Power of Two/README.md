# 231 Power of Two 解题小记

这道题是在解 342. Power of Four 之后回来看一眼的，我发现 11 个月以前的我太有想象力了，是用正则来做的

    var isPowerOfTwo = function(n) {
        var pat = new RegExp("^10*$");
        return pat.test(n.toString(2));
    };

具体的思考可以参见 [Power of Four](https://github.com/iplus26/LeetCode-Solutions/tree/master/342.%20Power%20of%20Four)
